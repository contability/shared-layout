import useFile from "../../hooks/useFile";
import FileButton from "../../components/shared/fields/file-button";
import { FaRegTrashAlt } from "react-icons/fa";

const FileVersion01 = () => {
  const { files, setFilesData, removeFileData, clearFileData, ErrorModals } =
    useFile();
  return (
    <>
      <fieldset className="flex-1 flex flex-col gap-[1.2rem]">
        <div className="flex flex-col md:flex-row md:items-center title-xsm text-point-1 gap-[1.2rem]">
          <div className="md:min-w-[17.5rem] flex items-center justify-between">
            <label className="flex-1 md:max-w-[10rem]">Attach</label>
            <div className="flex gap-4">
              <button
                className="p-2 bg-gray-50 text-gray-500 rounded-lg hover:text-black"
                onClick={clearFileData}
              >
                all clear file
              </button>
              <FileButton
                className="p-2"
                label="Upload"
                id="file-button"
                onChange={setFilesData}
              />
            </div>
          </div>
          <p className="label text-text-1 w-full md:text-right">
            Only image and video files of 50MB or less can be attached / Up to 5
            can be attached.
          </p>
        </div>
        <div className="flex">
          <div className="hidden md:block md:w-[10rem]" />
          {files && files.length > 0 && (
            <ul className="w-full self-end bg-gray-50 py-[1rem] rounded-[8px] shadow-red">
              {files.map((file, fileIndex) => (
                <li
                  key={`contact-file__${fileIndex}`}
                  className="flex items-center gap-[1rem] h-[3.2rem] px-[1rem] py-[0.4rem] hover:bg-[#F6F6F6]"
                >
                  <button
                    className="text-gray-500 hover:text-black"
                    onClick={() => removeFileData(fileIndex)}
                  >
                    <FaRegTrashAlt size={16} />
                  </button>
                  <span className="w-full text-gray-500 label ">
                    {file.name}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </fieldset>
      {/* FIXME: ErrorModals들 사라질 때 motion exit 애니메이션 적용 안되는 문제 있음. 수정 필요 */}
      <ErrorModals />
    </>
  );
};

export default FileVersion01;
