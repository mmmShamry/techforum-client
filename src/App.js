import { Route, Routes } from "react-router-dom";
import Questions from "./views/Questions";
import Tags from "./views/Tags";
import Users from "./views/Users";
import Login from "./views/Login";
import SignUp from "./views/Signup";
import PrivateRoutes from "./components/PrivateRoutes";
import LogginRoute from "./components/LogginRoute";
import AskQuestion from "./views/Questions/AskQuestion";
import Question from "./views/Questions/SingleQuestion";


function App() {

  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes/>}>
          <Route path="/questions" element={<Questions />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/users" element={<Users />} />
          <Route path="/questions/ask" element={<AskQuestion/>} />
          <Route path="/questions/:id" element={<Question/>}/>
        </Route>
        <Route element={<LogginRoute/>}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/signUp" element={<SignUp/>} />
      </Routes>
    </>
  );
}

export default App;
