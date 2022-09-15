import Map from "./map/Map";
import styled from "styled-components";

const MainWrapper = styled.div`
  display: flex;
  /* width: 1920px;
  height: 1080px; */
  justify-content: center;
  align-items: center;
  /* margin-right: 300px;
  margin-top: 160px; */
  .mapbox {
    /* display: flex; */
    justify-content: center;
    align-items: center;
    margin-top: 150px;
    p {
      font-weight: 600;
    }
  }
`;

function App() {
  return (
    <MainWrapper>
      <div className="mapbox">
        <p>서울시 카페 찾기</p>
        <Map />
      </div>
    </MainWrapper>
  );
}

export default App;
