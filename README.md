# Music Stone
<img src="./client/src/img/musicstonelogoblack.png" width="400px" height="400px" title="px(픽셀) 크기 설정" alt="RubberDuck"></img><br/>
## About Music Stone
기존의 중앙화된 음악 생태계에서는 노래에 대한 권리나 수익들이 저작권자의 의지와 상관없이 음원 시장에 휩쓸리는 구조를 가지고 있었습니다.
물론, 곡을 홍보하고 유통하는 유통사나 음원사이트들의 노력을 폄하하는 것은 아니나 저작권자에게 10%가량의 수익이 돌아가는 현재 구조가 합리적인가에는 의문점이 생겼고, 이에 이 프로젝트를 기획하게 되었습니다.

MusicStone은 탈중앙화된 음악스트리밍 및 음원NFT 거래 서비스로 기존 생태계에서 벗어나 사람들끼리 직접 음원에 대한 권리를 주고 받으며, 원한다면 해당 저작권을 분배하여 공동소유자들과 그 이익을 함께할 수도 있습니다. 그리고 더 나아가 스트리밍을 통해 등록된 음원들이 기존의 시장을 거치지 않고도 곡을 알릴 수 있도록 새로운 선택지를 추가해주는 것이 저희의 목표입니다.

## About MusicStone Crew
* 고유진
  * POSITION : Backend
  * CONTRIBUTIONS
    - Server API 설계 & 구현
    - DB Schema 설계
  * GITHUB : [https://github.com/YOONIQUE-GARAGE](https://github.com/YOONIQUE-GARAGE/BEB_02_MusicStone)
* 박찬영
  * POSITION : Frontend
  * CONTRIBUTIONS :
    - MyStone Page 구현
    - Musician Page 구현
    - MusicianInfo 구현
    - Album Page 구현
    - Buystone Page 구현
    - TradeStone Page 구현
    - Nav Component 수정
  * GITHUB : [https://github.com/PCY71](https://github.com/PCY71/BEB_02_MusicStone)
* 박우현
  * POSITION : Backend
  * CONTRIBUTIONS :
    - Server API
    - 초기 Server 프로젝트 구조 설계
    - mongo db 예제코드 작성(Schema, db read write)
    - Server, Client caver 연결, 사용 예제코드 작성
    - Contract 설계
        - KIP7 - MusicStoneToken
        - KIP37 - MusicStoneSFT
        - MusicStoneService
            - 토큰구매, 판매
            - SFT Mint
            - SFT Market 등록, 거래, 취소
            - MusicStoneToken 예치(스트리밍으로 소비), SFT 소유지분에 따른 토큰분배
  * GITHUB : [https://github.com/repedore](https://github.com/repedore/BEB_02_MusicStone)

* 고은초롱
  * POSITION : Frontend
  * CONTRIBUTIONS : 
    - Server API
    - 로고 드로잉
    - 기본 frontend 구조 세팅
    - My Page 구현
    - Register Musician Page 구현
    - Register Album Page 구현
    - Register Stone Page 구현
    - Buytoken Page 구현
    - Playlist Page 구현
    - Nav Component 구현
    - 서버에서 응답을 주는 시뮬레이터 코드로 Register 요청 테스트
    - Kaikas 지갑 연결 구현
    - 토큰 교환 ( 컨트랙트 수정 전, 클레이 → 토큰 ) 구현 및 수정 (컨트랙트 수정 후)
  *  GITHUB : [https://github.com/koeunchorong](https://github.com/koeunchorong/BEB_02_MusicStone)
