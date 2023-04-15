import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../Actions/shared";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Dashboard from "./Dashboard";
import NewPoll from "./NewPoll";
import PollsDetail from "./PollsDetail";
import LeaderBoard from "./LeaderBoard";
import PageNotFound from "./PageNotFound";
import Login from "./Login";
import PrivateSecurity from "./PrivateSecurity";

function App({ dispatch, userLogin }) {
  useEffect(() => {
    dispatch(handleInitialData());
  });

  return (
    <div className="App">
      {userLogin && <Nav/>}
      {/* <Dashboard />
      <NewPoll /> */}
      {/* <PollsDetail match={{params:{id:"8xf0y6ziyjabvozdd253nd"}}}/> */}
      <Routes>
        <Route path="/login" exact element={<Login/>}></Route>
        <Route path="/" element={ <PrivateSecurity><Dashboard /></PrivateSecurity>}></Route>
        <Route path="/leaderboard" element={<PrivateSecurity><LeaderBoard /></PrivateSecurity>}></Route>
        <Route path="/questions/:id" element={ <PrivateSecurity><PollsDetail /></PrivateSecurity>}></Route>
        <Route path="/new" element={ <PrivateSecurity><NewPoll /></PrivateSecurity>}></Route>
        <Route path="/404" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

const mapStateToProp=({authedUser})=>({
  userLogin: !!authedUser,
})

export default connect(mapStateToProp)(App);
