import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Modal = ({ movie, close }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    axios
      .delete(`http://127.0.0.1:5000/api/movies/${movie.id}`)
      .then(() => {
        toast.warning(`${movie.title} kaldırıldı`);

        navigate("/");
      })
      .catch(() => {
        toast.error("Üzgünüz, bir hata oluştu.");
      });
  };
  return (
    <div className="fixed bg-black w-1full h-full inset-0 bg-opacity-50 grid place-items-center">
      <div className="bg-white p-10 rounded-md shadow">
        <h1 className="text-xl flex gap-4 items-center">
          <span className="bg-yellow-500 rounded p-1">{movie.title}</span>
          <span className="font-bold">Filmi Silinecek.</span>
        </h1>

        <h1 className="font-semibold text-xl my-5">
          Bu İşlemi Onaylıyor musnuz?
        </h1>

        <div className="flex justify-end gap-4">
          <button
            onClick={close}
            className="bg-gray-400 p-2 px-4 rounded-md text-white hover:bg-gray-500"
          >
            İptal
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-400 p-2 px-4 rounded-md text-white hover:bg-red-500"
          >
            Onayla
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
