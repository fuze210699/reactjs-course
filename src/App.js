
import GlobalStyle from "./global-style";
import LoginPage from "./pages/LoginPage/LoginPage";
import MusicList  from "pages/Product/MusicList/MusicList";
import BaiTapState from "pages/BaiTap/BaiTapState";
import BaiGiangRenderData from "pages/BaiTap/BaiGiangRenderData";
import BaiGiangState from "pages/BaiTap/BaiGiangState";
import TodoFeature from "pages/ToDo/TodoFeature";
import ViduMapDataWithTable from "pages/BaiTap/ViduMapDataWithTable";
function App() {
  return (
    <div className="container">
    {/* <LoginPage /> */}
    {/* <MusicList  /> */}
    {/* <BaiTapState /> */}
    {/* <BaiGiangRenderData /> */}
    {/* <BaiGiangState /> */}
    <TodoFeature />
    {/* <ViduMapDataWithTable /> */}
    <GlobalStyle />
    </div>
  );
}

export default App;
