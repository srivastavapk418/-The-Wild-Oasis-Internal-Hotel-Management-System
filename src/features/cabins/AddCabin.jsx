import CreateCabinForm from "../cabins/CreateCabinForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

// Using Compound Component Pattern
function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add New Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>

        {/* Just for Reference - We can have multiple windows inside the same `Modal` component */}
        {/* <Modal.Open opens="table">
        <Button>Show Table</Button>
        </Modal.Open>
        <Modal.Window name="table">
        <CabinTable />
        </Modal.Window> */}
      </Modal>
    </div>
  );
}

export default AddCabin;

// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   return (
//     <>
//       <Button onClick={() => setIsOpenModal((show) => !show)}>
//         Add New Cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//       {/* {isOpenModal && <CreateCabinForm onClose={() => setIsOpenModal(false)} />} */}
//     </>
//   );
// }
