import { FaRegTrashAlt } from "react-icons/fa";
import DropZone from "../../components/shared/fields/file/drop-zone";
import useFileManager from "../../lib/hooks/useFile";

const FileVersion02 = () => {
  const {
    files,
    handleFileAdd,
    handleFileRemove,
    handleFilesClear,
    FileErrorModals,
  } = useFileManager();

  return (
    <>
      <div className="flex-1 flex flex-col gap-[1.2rem]">
        <div>
          <h2 className="text-4xl text-center">Drag and Drop File</h2>
          <button
            className="p-2 bg-gray-50 text-gray-500 rounded-lg hover:text-black float-right"
            onClick={handleFilesClear}
          >
            all clear file
          </button>
        </div>

        <DropZone
          className="w-full min-h-[200px] rounded-[8px] bg-gray-50 flex items-center justify-center cursor-pointer transition-all hover:bg-gray-100"
          onChange={handleFileAdd}
          // onDropFiles={handleDropFiles}
        >
          <div className="text-center p-6">
            <p className="text-gray-500 mb-2">
              파일을 여기에 드래그하거나 클릭하여 업로드하세요
            </p>
            <p className="text-xs text-gray-400">
              이미지 및 비디오 파일 (50MB 이하)
            </p>
          </div>
        </DropZone>

        {files && files.length > 0 && (
          <div className="flex">
            <div className="hidden md:block md:w-[10rem]" />
            <ul className="w-full self-end bg-gray-50 py-[1rem] rounded-[8px] shadow-red">
              {files.map((file, fileIndex) => (
                <li
                  key={`contact-file__${fileIndex}`}
                  className="flex items-center gap-[1rem] h-[3.2rem] px-[1rem] py-[0.4rem] hover:bg-[#F6F6F6]"
                >
                  <button
                    className="text-gray-500 hover:text-black"
                    onClick={() => handleFileRemove(fileIndex)}
                  >
                    <FaRegTrashAlt size={16} />
                  </button>
                  <span className="w-full text-gray-500 label ">
                    {file.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {/* FIXME: FileErrorModals들 사라질 때 motion exit 애니메이션 적용 안되는 문제 있음. 수정 필요 */}
      <FileErrorModals />
    </>
  );
};

export default FileVersion02;
