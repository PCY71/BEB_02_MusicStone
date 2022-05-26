import React from "react";
import styled from "styled-components"

export function Main() {
  return (
    <Body>
      <ImgBox>
        <Img className="mainimg" src="/img/MusicStone.png" alt="profile" />
      </ImgBox>
      <ContentContainer>
        <SubTitle><h1>About MusicStone</h1></SubTitle>
        <ContentWrapper>
          <InfoBox>
            <div className="text">
              기존의 중앙화된 음악 생태계에서는 노래에 대한 권리나 수익들이 저작권자의 의지와 상관없이 음원 시장에 휩쓸리는 구조를 가지고 있었습니다.
              물론, 곡을 홍보하고 유통하는 유통사나 음원사이트들의 노력을 폄하하는 것은 아니나 저작권자에게 10%가량의 수익이 돌아가는 현재 구조가 합리적인가에는 의문점이 생겼고, 이에 이 프로젝트를 기획하게 되었습니다.
            </div>
            <div className="text">
              MusicStone은 탈중앙화된 음악스트리밍 및 음원NFT 거래 서비스로 기존 생태계에서 벗어나 사람들끼리 직접 음원에 대한 권리를 주고 받으며, 원한다면 해당 저작권을 분배하여 공동소유자들과 그 이익을 함께할 수도 있습니다.
            </div>
            <div className="text">
              그리고 더 나아가 스트리밍을 통해 등록된 음원들이 기존의 시장을 거치지 않고도 곡을 알릴 수 있도록 새로운 선택지를 추가해주는 것이 저희의 목표입니다.
            </div>
          </InfoBox>
          <InfoImgBox>
            <img src="/img/musicstonelogo.png" />
          </InfoImgBox>
        </ContentWrapper>
        <SubTitleRight><h1>즐겨듣는 음악들을 수집하세요</h1></SubTitleRight>
        <ContentWrapper>
          <InfoImgBox>
            <img src="/img/StreamImg.png" />
          </InfoImgBox>
          <InfoBox>
            <h3><i>스트리밍</i></h3>
            <p>
              MusicStone에서는 자체 토큰인 MTK를 사용하여 스트리밍 서비스를 제공합니다.
            </p>
            <h3><i>저작권 거래</i></h3>
            <p>
              음악을 들으며 마음에 드는 곡이 생기셨나요?<br />
              MusicStone에서는 클레이튼(KLAY)을 통한 거래로 소유한 저작권을 주고 받을 수 있습니다.<br />
              예쁜 돌들을 수집하듯 내 음악을 하나 둘 모아가는 건 어떨까요?
            </p>
          </InfoBox>
        </ContentWrapper>
        <SubTitle><h1>블록체인을 활용한 서비스</h1></SubTitle>
        <ContentWrapper>
          <InfoBox>
            <h3><i>MTK (MusicStone Token)</i></h3>
            <div>
              MTK는 저희 서비스의 스트리밍에 사용되는 자원으로 KIP-7을 따르는 Klaytn 기반 토큰입니다.
            </div>
            <h3><i>SFT</i></h3>
            <div>
              NFT를 나눠서 소유하는 기술인 SFT(KIP-37)가 사용되어 저작권을 공동소유할 수 있습니다.
            </div>
            <div>
              스트리밍에서 소모된 MTK는 유저들이 보유한 지분에 따라 정산됩니다.
            </div>
          </InfoBox>
          <InfoImgBox>
            <img src="/img/blockchain.png" />

          </InfoImgBox>
        </ContentWrapper>
      </ContentContainer>
    </Body>
  );
}
const Body = styled.div`
display:flex;
align-items: center;
flex-direction: column;
`;
const ImgBox = styled.div`
width: 1000px;
text-align: center;
`;
const Img = styled.img`
text-align: center;
vertical-align: middle;
width: 15rem;
`;
const ContentContainer = styled.div`
width: 1000px;
margin-bottom: 50px;
`;
const SubTitle = styled.div`
background: linear-gradient(to right top, #861657, #ffa69e);
color: transparent;
-webkit-background-clip: text;
h1{
  padding: 0 20px;
}
`;
//border-top : 1px solid #333333;
const SubTitleRight = styled(SubTitle)`
text-align:right;
`;
const ContentWrapper = styled.div`
display:flex;
justify-content: space-between;
margin-bottom: 2 0px;
div, p{
  padding: 0 20px;
  font-size: 14px;
}
h3{
  padding: 0 20px;
}
`;
const InfoBox = styled.div`
width: 200%;
`;
const InfoImgBox = styled.div`
width: 100%;
text-align: center;
img{
  width: 200px;
}
`;