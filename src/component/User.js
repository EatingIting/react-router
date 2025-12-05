import { Navigate, useLocation, useSearchParams } from "react-router-dom";

function User() {
  //쿼리스트링을 받는 방법
  //1. userLocation훅을 사용
  //2. userSearchParams훅을 사용

  // const location = useLocation();
  // console.log(location);

  const [obj, func] = useSearchParams(); //[0] - 객체반환, [1] - seeter함수변경
  let id = obj.get("id");
  let age = obj.get("age");
  
  //권한이 없으면 접근하지 못함
  const auth = true;
  if(!auth) {
    //강제이동 컴포넌트 - replace속성 true면 현재 페이지를 기록에 남기지 않겠다.
    return <Navigate to ="/" replace={true} />;
  }

  return (
    <>
      <h3>유저 화면</h3>
      쿼리스트링값 {id}, {age}
    </>
  )
}

export default User;