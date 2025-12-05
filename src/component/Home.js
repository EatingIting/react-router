import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h3>홈 화면</h3>
      {/* a 태그 대신 Link 태그로 화면 이동을 한다. (a태그도 안되는건 아님) */}
      <Link to = '/user?id=abc123&age=20'>유저페이지</Link><br/>
      <Link to = '/info/20/홍길동'>인포페이지</Link><br/>
    </>
  )
}

export default Home;