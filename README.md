<div align= "center">
    <img src="https://capsule-render.vercel.app/api?type=cylinder&color=auto&height=120&text=Cops%20And%20Robbers&animation=twinkling&fontColor=ffffff&fontSize=70" />
    </div>
    <div style="text-align: left;">
    <h2 style="border-bottom: 1px solid #D8DEE4; color: #282D33;">Tech Stacks </h2> <br>
    <div style="margin: ; text-align: left;" "text-align: left;"> <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white">
          <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">
          <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white">
          </div>
    </div>
    <div style="text-align: left;">
    <h2 style="border-bottom: 1px solid #D8DEE4; color: #282D33;">1. 주제 및 팀(팀원) 소개</h2>
    <div style="font-weight: 700; font-size: 15px; text-align: left; color: #282D33;">주제 : 경찰과 도둑 게임</div>
      <br>
    </div>
      <ul>
        <li>신승민</li>
        <li>임성실</li>
        <li>이진천</li>
      </ul>
    <div>
        <h2 style="border-bottom: 1px solid #D8DEE4; color: #282D33;">2. 협업 방식</h2>
        <div style="font-weight: 700; font-size: 15px; text-align: left; color: #282D33;">
            초반에는 구두로 자유롭게 아이디어를 내면서 틀을 잡아갔고, 이후엔 Slack을 활용하여 기능 구현에 필요한 정보를 공유하고 각자 작성한 코드를 비교하여 수정 및 보완하였습니다.
        </div>
    </div>
    <div>
        <h2 style="border-bottom: 1px solid #D8DEE4; color: #282D33;">3. 기능 시연</h2>
        <div style="font-weight: 700; font-size: 15px; text-align: left; color: #282D33;">
            (실제로 시연)
        </div>
    </div>
    <div>
        <h2 style="border-bottom: 1px solid #D8DEE4; color: #282D33;">4. 핵심 기능 설명 및 구현 방법</h2>
        <div style="font-weight: 700; font-size: 15px; text-align: left; color: #282D33;">
            1. 수업시간에 배운 'EventListener()'를 활용하여 클릭 이벤트 대신 키보드 이벤트를 구현해보기로 하였습니다. ASCII 코드에 기반한 event.keyCode가 사용자가 입력한 키보드 값과 일치하는 지를 비교하여 각 상황에 맞는 화면이 출력되도록 설정하였습니다.<br><br>
            2. 클릭 이벤트와 세션 저장소를 사용해서 다크모드 기능을 구현했습니다. 새로고침이나 RESTART를 해도 변경된 모드가 계속 적용되도록 하였고, 버튼을 클릭하면 세션에 저장된 값에 따라 다크모드와 일반모드를 구분해서 변경합니다.
        </div>
    </div>
    <div>
        <h2 style="border-bottom: 1px solid #D8DEE4; color: #282D33;">5. 트러블 슈팅</h2>
        <div style="font-weight: 700; font-size: 15px; text-align: left; color: #282D33;">
            특정 상황이 되면 게임 종료 화면을 띄울 수 있도록 코드 중간에 'alert()' 함수를 작성하였으나,
다른 코드들보다 'alert()' 함수가 먼저 실행되어 선행 조건 전부터 화면에 출력되는 문제가 있었습니다. 이는 JS 엔진이 먼저 코드를 실행하고 비동기 이벤트인 Web API를 실행하기 때문에 나오는 결과였습니다. (모든 코드가 실행되고 마지막으로 Event Queue에 등록된 Event Handler가 처리되기 때문) 그래서 'alert()' 대신 setTimeout()'의 콜백 함수 속에 지연 시간을 두고 화면을 출력하는 기능을 구현하는 방식으로 해결하였습니다.<br><br>
* 비동기 이벤트 : JS 엔진에 정의되어 있지 않은 함수들을 가리키며 이 함수들은 모두 비동기 방식 이벤트로 실행<br>
        </div>
    </div>
    <div>
        <h2 style="border-bottom: 1px solid #D8DEE4; color: #282D33;">6. 회고(느낀점)</h2>
        <div style="font-weight: 700; font-size: 15px; text-align: left; color: #282D33;">
            신승민 : 간단한 기능조차도 실제 구현에 있어서는 예상외의 많은 오류가 발생한다는 것을 알게 되었습니다.
또한 팀원들과 함께 토이 프로젝트를 차근차근 단계별로 구현해볼 수 있어서 매우 재밌었고,
이해가 부족한 부분은 서로 도움을 받을 수 있어서 유익한 시간이였습니다.<br><br>
이진천 : 주제 선정부터 구현, 그리고 문제 해결까지 팀원들과 함께 하면서 알고 있던 내용은 다시 한번 확인할 수 있었고 모르는 내용은 서로 알려주면서 많이 배웠습니다.<br><br>
임성실 : 팀원들과 회의하여 주제를 정하고 함께 만들어가는 과정이 의미 있고 재밌었습니다. 배운 내용을 활용하여 프로젝트를 해보니 이론으로만 봤을 때 헷갈렸던 내용도 이해하게 되는 경험을 하였습니다. 앞으로도 어려운 내용들을 마주쳤을 때 적용해보고 부딪쳐가며 공부해야겠다고 생각하게 되었습니다.
        </div>
    </div>