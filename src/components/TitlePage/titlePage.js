import './titlePage.css';
import { BiHomeAlt } from 'react-icons/bi';


function TitlePage({title}) {
  return (
      <div className="box-title">
        <p className="title">
          {title}
        </p>
       <BiHomeAlt className="icon-title"/>
      </div>
  );
}

export default TitlePage;
