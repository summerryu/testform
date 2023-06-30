
    
     
        const checkboxes = document.querySelectorAll('.chk');
        const submitButton = document.querySelector('#next');
        const formBoxes = document.querySelectorAll(".form_box");
        const countMessage = document.querySelector(".countMessage");
        // 현재 보여지는 form_box 인덱스
        let currentIndex = 0;
        // 초기화
        formBoxes[currentIndex].style.display = 'flex';
        const totalData = [
          {
              images :"/img/0-1.png",
              message:"신생아 입맛이시네요? \n 혹시 응애?"
          },
          {
            images :"/img/0-2.png",
            message:"유치원생 입맛이시네요?"
          },
          {
            images :"/img/0-3.png",
            message:"초딩 입맛이시네요?"
          },
          {
            images :"/img/0-4.png",
            message:"일반인 입맛이시네요?"
          },
          {
            images :"/img/0-5.png",
            message:"으르신 입맛이시네요?"
          },
          {
            images :"/img/0-7.png",
            message:"쫌 아재 입맛이시네요?"
          },
          {
            images :"/img/0-6.png",
            message:"뼛속까지 아재 입맛이시네요?"
          },
          {
            images :"/img/0-8.png",
            message:"혹시 베어그릴스?"
          },
        ]
        
        function showNextFormBox() {
          // 현재 보여지는 form_box를 숨김 처리
          formBoxes[currentIndex].style.display = 'none';
          const title = document.querySelector(".title");
          const lastbox = document.querySelector(".last_box");
          // 다음 form_box의 인덱스 계산
          currentIndex++;
      
          
          // 다음 form_box가 있을 경우에만 보여줌
          if (currentIndex < formBoxes.length) {
            formBoxes[currentIndex].style.display = 'flex';
          } 
          if(currentIndex === formBoxes.length ){
              const checkon = document.querySelectorAll(".chk:checked").length;
              if(checkon == 0){
                countMessage.querySelector("img").src = totalData[0].images;
                countMessage.querySelector("h4").innerText = totalData[0].message
              }
              else if(checkon >= 1  && checkon <= 5){
                countMessage.querySelector("img").src = totalData[1].images
                countMessage.querySelector("h4").innerText = totalData[1].message
              }
              else if(checkon >= 6  && checkon <= 10){
                countMessage.querySelector("img").src = totalData[2].images
                countMessage.querySelector("h4").innerText = totalData[2].message
              }
              else if(checkon >= 11  && checkon <= 15){
                countMessage.querySelector("img").src = totalData[3].images
                countMessage.querySelector("h4").innerText = totalData[3].message
              }
              else if(checkon >= 16  && checkon <= 20){
                countMessage.querySelector("img").src = totalData[4].images
                countMessage.querySelector("h4").innerText = totalData[4].message
              }
              else if(checkon >= 21  && checkon <= 25){
                countMessage.querySelector("img").src = totalData[5].images
                countMessage.querySelector("h4").innerText = totalData[5].message
              }
              else if(checkon >= 26  && checkon <= 33){
                countMessage.querySelector("img").src = totalData[6].images
                countMessage.querySelector("h4").innerText = totalData[6].message
              }
              else if(checkon == 34){
                countMessage.querySelector("img").src = totalData[7].images
                countMessage.querySelector("h4").innerText = totalData[7].message
              }
              submitButton.style.display = 'none';
              title.style.display = "none";
              lastbox.style.display = "flex";
            }
          }
      
          
          
         

        submitButton.addEventListener('click', function(event) {
          showNextFormBox();
        });
       