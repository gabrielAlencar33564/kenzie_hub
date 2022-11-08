import { FiTrash } from "react-icons/fi";
import { MdEdit } from "react-icons/md";
import { ConteinerListTechs } from "./style";
import { useTechContextProps } from "../../contexts/techContext";
import { useUserContextProps } from "../../contexts/userContext";
import { IResponseTech } from "../../interfaces/tech";

interface IFilterBar {
  filteredTechs: IResponseTech[];
}

function ListTechs({ filteredTechs }: IFilterBar) {
  const { techsList } = useUserContextProps();

  const { deleteTechs, setOnModalEdit, setElement } = useTechContextProps();

  return (
    <ConteinerListTechs>
      <ul>
        {filteredTechs.length > 0
          ? filteredTechs.map((element: IResponseTech) => {
              return (
                <li key={element.id}>
                  <h2
                    onClick={() => {
                      setOnModalEdit(true);
                      setElement(element);
                    }}
                  >
                    {element.title} <MdEdit />
                  </h2>
                  <div>
                    <span>{element.status}</span>
                    <span onClick={() => deleteTechs(element.id)}>
                      <FiTrash />
                    </span>
                  </div>
                </li>
              );
            })
          : techsList.map((element: IResponseTech) => {
              return (
                <li key={element.id}>
                  <h2
                    onClick={() => {
                      setOnModalEdit(true);
                      setElement(element);
                    }}
                  >
                    {element.title} <MdEdit />
                  </h2>
                  <div>
                    <span>{element.status}</span>
                    <span onClick={() => deleteTechs(element.id)}>
                      <FiTrash />
                    </span>
                  </div>
                </li>
              );
            })}
      </ul>
    </ConteinerListTechs>
  );
}

export default ListTechs;