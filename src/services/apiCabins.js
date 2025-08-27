import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error("Error fetching cabins:", error);
    throw new Error("Could not fetch cabins");
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error("Error deleting cabin:", error);
    throw new Error("Could not delete cabin");
  }

  return data;
}

export async function createEditCabin(cabinData, id) {
  const hasImagePath = cabinData.image?.startsWith?.(supabaseUrl);

  const imageName =
    Math.random() + "-" + cabinData.image?.name?.replaceAll("/", "");
  const imagePath = hasImagePath
    ? cabinData.image
    : supabaseUrl + "/storage/v1/object/public/cabin-images/" + imageName;

  //1. Create/Edit Cabin
  let query = supabase.from("cabins");

  // A) Create
  if (!id) query = query.insert([{ ...cabinData, image: imagePath }]);

  // B) Edit
  if (id) query = query.update({ ...cabinData, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error("Error creating cabin:", error);
    throw new Error("Could not create cabin");
  }

  //2. Upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, cabinData.image);

  //3. Delete the cabin if there was an error uploading image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created"
    );
  }

  return data;
}
