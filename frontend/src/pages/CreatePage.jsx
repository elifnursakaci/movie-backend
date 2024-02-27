import InputField from "../components/InputField";
import axios from "axios";

const CreatePage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const data = Object.fromEntries(form.entries());

    axios
      .post("http://127.0.0.1:5000/api/movies", data, { method: "POST" })
      .then(() => {
        toast.success("Film başarıyla oluşturuldu");

        navigate("/");
      })
      .catch(() => {
        toast.error("Film oluşturma başarısız");
      }, {});
  };

  return (
    <div className="grid place-items-center bg-red-200 h-[calc(100vh-81px)]">
      <div className="max-w-[800px] grid grid-cols-1 sm:grid-cols gap-10 bg-white rounded p-10 shadow-lg">
        <form className="flex flex-col gap-10 mb-10" onSubmit={handleSubmit}>
          <h1 className="text-4xl font-bold">YENİ FİLM OLUŞTUR</h1>
          <InputField label="Başlık" type="text" name="title" />
          <InputField label="Kategori" type="text" name="genre" />
          <InputField label="Puan" type="number" name="rating" />
          <InputField label="Yıl" type="number" name="year" />

          <button className="bg-red-400 p-1 rounded-md text-white font-semibold hover:bg-red-500">
            Oluştur
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePage;
