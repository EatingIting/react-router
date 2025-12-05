import { useParams } from "react-router-dom";

function Info() {

/* URL 파라미터 받기 */
const params = useParams();
  return (
    <>
      <h3>인포 화면</h3>
      나이 : {params.age}<br/>
      이름 : {params.name}<br/>
    </>
  )
}

export default Info;