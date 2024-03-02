<script setup lang="ts">
</script>

<template>
  <div class="relative z-0 flex h-full w-full overflow-hidden bg-slate-300">
    <div class="flex-shrink-0 overflow-x-hidden bg-token-sidebar-surface-primary" style="width: 260px;">
      <div class="h-full w-[260px]">
        <div class="flex h-full min-h-0 flex-col">
          <div class="flex h-full min-h-0 flex-col">
            <div class="scrollbar-trigger relative h-full w-full flex-1 items-start border-white/20">
              <h2
                style="position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;">
                채팅 기록</h2>
              <nav class="flex h-full w-full flex-col px-3 pb-3.5" aria-label="채팅 기록">
                <div
                  class="absolute left-0 top-0 z-20 w-full overflow-hidden transition-all duration-500 invisible max-h-0">
                  <div class="px-3 py-3.5">
                    <div class="pb-0.5 last:pb-0" tabindex="0"><a
                        class="group flex h-10 items-center gap-2 rounded-lg bg-token-sidebar-surface-primary px-2 font-medium hover:bg-token-sidebar-surface-secondary"
                        href="/">
                        <div class="h-7 w-7 flex-shrink-0">
                          <div
                            class="gizmo-shadow-stroke relative flex h-full items-center justify-center rounded-full bg-white text-gray-950">
                            <svg width="41" height="41" viewBox="0 0 41 41" fill="none"
                              xmlns="http://www.w3.org/2000/svg" class="h-2/3 w-2/3" role="img"><text x="-9999"
                                y="-9999">ChatGPT</text>
                              <path
                                d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z"
                                fill="currentColor"></path>
                            </svg>
                          </div>
                        </div>
                        <div
                          class="grow overflow-hidden text-ellipsis whitespace-nowrap text-sm text-token-text-primary">
                          채팅 지우기</div>
                        <div class="flex gap-3"><span class="flex items-center" data-state="closed"><button
                              class="text-token-text-primary"><svg width="24" height="24" viewBox="0 0 24 24"
                                fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M4.5 2.5C5.05228 2.5 5.5 2.94772 5.5 3.5V5.07196C7.19872 3.47759 9.48483 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C7.1307 21.5 3.11828 17.8375 2.565 13.1164C2.50071 12.5679 2.89327 12.0711 3.4418 12.0068C3.99033 11.9425 4.48712 12.3351 4.5514 12.8836C4.98798 16.6089 8.15708 19.5 12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C9.7796 4.5 7.7836 5.46469 6.40954 7H9C9.55228 7 10 7.44772 10 8C10 8.55228 9.55228 9 9 9H4.5C3.96064 9 3.52101 8.57299 3.50073 8.03859C3.49983 8.01771 3.49958 7.99677 3.5 7.9758V3.5C3.5 2.94772 3.94771 2.5 4.5 2.5Z"
                                  fill="currentColor"></path>
                              </svg></button></span></div>
                      </a></div>
                  </div>
                  <div class="bg-gray-900 px-4 py-3">
                    <div class="p-1 text-sm text-gray-100">이 브라우저에서는 채팅 기록이 꺼져 있습니다.</div>
                    <div class="p-1 text-xs text-token-text-tertiary">히스토리가 꺼져 있을 때, 이 브라우저에서의 새로운 채팅은 어떤 기기에서도 히스토리에
                      표시되지 않으며, 모델 학습에 사용되지 않거나 30일 이상 저장되지 않습니다. <strong>이 설정은 브라우저나 기기 간에 동기화되지 않습니다.</strong> <a
                        href="https://help.openai.com/en/articles/7730893" target="_blank" class="underline"
                        rel="noreferrer">자세히 알아보기</a></div><button class="btn relative btn-primary mt-4 w-full">
                      <div class="flex w-full gap-2 items-center justify-center"><svg stroke="currentColor" fill="none"
                          stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                          class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
                          <line x1="12" y1="2" x2="12" y2="12"></line>
                        </svg>채팅 기록 활성화</div>
                    </button>
                  </div>
                  <div class="h-24 bg-gradient-to-t from-gray-900/0 to-gray-900"></div>
                </div>
                <div class="flex-col flex-1 transition-opacity duration-500 -mr-2 pr-2 overflow-y-auto">
                  <div class="sticky left-0 right-0 top-0 z-20 pt-3.5">
                    <div class="pb-0.5 last:pb-0" tabindex="0"><a
                        class="group flex h-10 items-center gap-2 rounded-lg bg-token-sidebar-surface-primary px-2 font-medium hover:bg-token-sidebar-surface-secondary"
                        href="/">
                        <div class="h-7 w-7 flex-shrink-0">
                          <div
                            class="gizmo-shadow-stroke relative flex h-full items-center justify-center rounded-full bg-white text-gray-950">
                            <svg width="41" height="41" viewBox="0 0 41 41" fill="none"
                              xmlns="http://www.w3.org/2000/svg" class="h-2/3 w-2/3" role="img"><text x="-9999"
                                y="-9999">ChatGPT</text>
                              <path
                                d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z"
                                fill="currentColor"></path>
                            </svg>
                          </div>
                        </div>
                        <div
                          class="grow overflow-hidden text-ellipsis whitespace-nowrap text-sm text-token-text-primary">
                          ChatGPT</div>
                        <div class="flex gap-3"><span class="flex items-center" data-state="closed"><button
                              class="text-token-text-primary"><svg width="24" height="24" viewBox="0 0 24 24"
                                fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M16.7929 2.79289C18.0118 1.57394 19.9882 1.57394 21.2071 2.79289C22.4261 4.01184 22.4261 5.98815 21.2071 7.20711L12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16H9C8.44772 16 8 15.5523 8 15V12C8 11.7348 8.10536 11.4804 8.29289 11.2929L16.7929 2.79289ZM19.7929 4.20711C19.355 3.7692 18.645 3.7692 18.2071 4.2071L10 12.4142V14H11.5858L19.7929 5.79289C20.2308 5.35499 20.2308 4.64501 19.7929 4.20711ZM6 5C5.44772 5 5 5.44771 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V14C19 13.4477 19.4477 13 20 13C20.5523 13 21 13.4477 21 14V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 4.34314 4.34315 3 6 3H10C10.5523 3 11 3.44771 11 4C11 4.55228 10.5523 5 10 5H6Z"
                                  fill="currentColor"></path>
                              </svg></button></span></div>
                      </a></div>
                  </div>
                  <div>
                    <div class="pb-0.5 last:pb-0" tabindex="0"><a
                        class="group flex h-10 items-center gap-2 rounded-lg bg-token-sidebar-surface-primary px-2 font-medium hover:bg-token-sidebar-surface-secondary"
                        href="/g/g-SmLuph3oA-future-frontend-mentor">
                        <div class="h-7 w-7 flex-shrink-0">
                          <div class="gizmo-shadow-stroke overflow-hidden rounded-full"><img
                              src="https://files.oaiusercontent.com/file-GFSLw1jvhy9KtTdMzhyImzF4?se=2124-01-13T02%3A15%3A17Z&amp;sp=r&amp;sv=2021-08-06&amp;sr=b&amp;rscc=max-age%3D1209600%2C%20immutable&amp;rscd=attachment%3B%20filename%3D608a9288-ecc6-4e8c-9200-70c9e652e320.png&amp;sig=aFxLelPdICMvXjm19mLDguzeSII5H7ZxbUU4CUNotyU%3D"
                              class="h-full w-full bg-token-main-surface-secondary" alt="GPT" width="80" height="80">
                          </div>
                        </div>
                        <div
                          class="grow overflow-hidden text-ellipsis whitespace-nowrap text-sm text-token-text-primary">
                          Future Frontend Mentor</div>
                        <div class="flex gap-3"><span class="flex items-center" data-state="closed"><button
                              class="invisible text-token-text-tertiary hover:text-token-text-secondary group-hover:visible"><svg
                                width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M16.7929 2.79289C18.0118 1.57394 19.9882 1.57394 21.2071 2.79289C22.4261 4.01184 22.4261 5.98815 21.2071 7.20711L12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16H9C8.44772 16 8 15.5523 8 15V12C8 11.7348 8.10536 11.4804 8.29289 11.2929L16.7929 2.79289ZM19.7929 4.20711C19.355 3.7692 18.645 3.7692 18.2071 4.2071L10 12.4142V14H11.5858L19.7929 5.79289C20.2308 5.35499 20.2308 4.64501 19.7929 4.20711ZM6 5C5.44772 5 5 5.44771 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V14C19 13.4477 19.4477 13 20 13C20.5523 13 21 13.4477 21 14V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 4.34314 4.34315 3 6 3H10C10.5523 3 11 3.44771 11 4C11 4.55228 10.5523 5 10 5H6Z"
                                  fill="currentColor"></path>
                              </svg></button></span></div>
                      </a></div>
                    <div class="pb-0.5 last:pb-0" tabindex="0"><a
                        class="group flex h-10 items-center gap-2 rounded-lg bg-token-sidebar-surface-primary px-2 font-medium hover:bg-token-sidebar-surface-secondary"
                        href="/g/g-jeYOaToMO-future-backend-mentor">
                        <div class="h-7 w-7 flex-shrink-0">
                          <div class="gizmo-shadow-stroke overflow-hidden rounded-full"><img
                              src="https://files.oaiusercontent.com/file-GCQc0Nvsv7ZssNyaYfPr8ylt?se=2124-01-13T02%3A02%3A59Z&amp;sp=r&amp;sv=2021-08-06&amp;sr=b&amp;rscc=max-age%3D1209600%2C%20immutable&amp;rscd=attachment%3B%20filename%3D36d50352-d1f9-4357-8411-eac8117991e4.png&amp;sig=BgYedRYA36oILUbaU2m4%2Bu6gk9JHUvYENTIH4/J2gac%3D"
                              class="h-full w-full bg-token-main-surface-secondary" alt="GPT" width="80" height="80">
                          </div>
                        </div>
                        <div
                          class="grow overflow-hidden text-ellipsis whitespace-nowrap text-sm text-token-text-primary">
                          Future Backend Mentor</div>
                        <div class="flex gap-3"><span class="flex items-center" data-state="closed"><button
                              class="invisible text-token-text-tertiary hover:text-token-text-secondary group-hover:visible"><svg
                                width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M16.7929 2.79289C18.0118 1.57394 19.9882 1.57394 21.2071 2.79289C22.4261 4.01184 22.4261 5.98815 21.2071 7.20711L12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16H9C8.44772 16 8 15.5523 8 15V12C8 11.7348 8.10536 11.4804 8.29289 11.2929L16.7929 2.79289ZM19.7929 4.20711C19.355 3.7692 18.645 3.7692 18.2071 4.2071L10 12.4142V14H11.5858L19.7929 5.79289C20.2308 5.35499 20.2308 4.64501 19.7929 4.20711ZM6 5C5.44772 5 5 5.44771 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V14C19 13.4477 19.4477 13 20 13C20.5523 13 21 13.4477 21 14V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 4.34314 4.34315 3 6 3H10C10.5523 3 11 3.44771 11 4C11 4.55228 10.5523 5 10 5H6Z"
                                  fill="currentColor"></path>
                              </svg></button></span></div>
                      </a></div>
                    <div class="pb-0.5 last:pb-0" tabindex="0"><a
                        class="group flex h-10 items-center gap-2 rounded-lg bg-token-sidebar-surface-primary px-2 font-medium hover:bg-token-sidebar-surface-secondary"
                        href="/g/g-XCW9p2no0-daughter-s-wonder">
                        <div class="h-7 w-7 flex-shrink-0">
                          <div class="gizmo-shadow-stroke overflow-hidden rounded-full"><img
                              src="https://files.oaiusercontent.com/file-msppncgawVtBpbKEZp9PhiJ6?se=2123-10-19T23%3A45%3A18Z&amp;sp=r&amp;sv=2021-08-06&amp;sr=b&amp;rscc=max-age%3D31536000%2C%20immutable&amp;rscd=attachment%3B%20filename%3D5d7c1e4a-d293-42b7-938c-7f8906be8fe4.png&amp;sig=8KkvITT7LrS9i3mvhqnNHVJsMHrrLKlivin5XfEykVo%3D"
                              class="h-full w-full bg-token-main-surface-secondary" alt="GPT" width="80" height="80">
                          </div>
                        </div>
                        <div
                          class="grow overflow-hidden text-ellipsis whitespace-nowrap text-sm text-token-text-primary">
                          Daughter's Wonder</div>
                        <div class="flex gap-3"><span class="flex items-center" data-state="closed"><button
                              class="invisible text-token-text-tertiary hover:text-token-text-secondary group-hover:visible"><svg
                                width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M16.7929 2.79289C18.0118 1.57394 19.9882 1.57394 21.2071 2.79289C22.4261 4.01184 22.4261 5.98815 21.2071 7.20711L12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16H9C8.44772 16 8 15.5523 8 15V12C8 11.7348 8.10536 11.4804 8.29289 11.2929L16.7929 2.79289ZM19.7929 4.20711C19.355 3.7692 18.645 3.7692 18.2071 4.2071L10 12.4142V14H11.5858L19.7929 5.79289C20.2308 5.35499 20.2308 4.64501 19.7929 4.20711ZM6 5C5.44772 5 5 5.44771 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V14C19 13.4477 19.4477 13 20 13C20.5523 13 21 13.4477 21 14V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 4.34314 4.34315 3 6 3H10C10.5523 3 11 3.44771 11 4C11 4.55228 10.5523 5 10 5H6Z"
                                  fill="currentColor"></path>
                              </svg></button></span></div>
                      </a></div>
                    <div class="pb-0.5 last:pb-0" tabindex="0"><a
                        class="group flex h-10 items-center gap-2 rounded-lg bg-token-sidebar-surface-primary px-2 font-medium hover:bg-token-sidebar-surface-secondary"
                        href="/g/g-cxhsSVJrV-special-day-planner">
                        <div class="h-7 w-7 flex-shrink-0">
                          <div class="gizmo-shadow-stroke overflow-hidden rounded-full"><img
                              src="https://files.oaiusercontent.com/file-MB0jxbb4LlOEGErPJ9KHc0PR?se=2123-11-09T15%3A08%3A56Z&amp;sp=r&amp;sv=2021-08-06&amp;sr=b&amp;rscc=max-age%3D31536000%2C%20immutable&amp;rscd=attachment%3B%20filename%3Dd9c8443b-8134-4058-8a37-8fc6073b17da.png&amp;sig=y0XiharsKyiz9DACz52NKI5teRnH5zfefiN9W2YxGlQ%3D"
                              class="h-full w-full bg-token-main-surface-secondary" alt="GPT" width="80" height="80">
                          </div>
                        </div>
                        <div
                          class="grow overflow-hidden text-ellipsis whitespace-nowrap text-sm text-token-text-primary">
                          Special Day Planner</div>
                        <div class="flex gap-3"><span class="flex items-center" data-state="closed"><button
                              class="invisible text-token-text-tertiary hover:text-token-text-secondary group-hover:visible"><svg
                                width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M16.7929 2.79289C18.0118 1.57394 19.9882 1.57394 21.2071 2.79289C22.4261 4.01184 22.4261 5.98815 21.2071 7.20711L12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16H9C8.44772 16 8 15.5523 8 15V12C8 11.7348 8.10536 11.4804 8.29289 11.2929L16.7929 2.79289ZM19.7929 4.20711C19.355 3.7692 18.645 3.7692 18.2071 4.2071L10 12.4142V14H11.5858L19.7929 5.79289C20.2308 5.35499 20.2308 4.64501 19.7929 4.20711ZM6 5C5.44772 5 5 5.44771 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V14C19 13.4477 19.4477 13 20 13C20.5523 13 21 13.4477 21 14V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 4.34314 4.34315 3 6 3H10C10.5523 3 11 3.44771 11 4C11 4.55228 10.5523 5 10 5H6Z"
                                  fill="currentColor"></path>
                              </svg></button></span></div>
                      </a></div><button
                      class="flex items-center gap-1 p-2 text-sm font-medium text-token-text-primary">8개 더 보기<svg
                        width="16" height="17" viewBox="0 0 16 17" fill="none" class="icon-md">
                        <path d="M11.3346 7.83203L8.00131 11.1654L4.66797 7.83203" stroke="currentColor"
                          stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg></button>
                    <div tabindex="0"><a
                        class="flex h-10 w-full items-center gap-2 rounded-lg px-2 font-medium text-token-text-primary hover:bg-token-sidebar-surface-secondary"
                        href="/gpts">
                        <div class="flex h-7 w-7 items-center justify-center text-token-text-secondary"><svg width="24"
                            height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                            class="icon-md">
                            <circle cx="6.75" cy="6.75" r="3.25" stroke="currentColor" stroke-width="2"></circle>
                            <circle cx="17.25" cy="6.75" r="3.25" stroke="currentColor" stroke-width="2"></circle>
                            <circle cx="6.75" cy="17.25" r="3.25" stroke="currentColor" stroke-width="2"></circle>
                            <circle cx="17.25" cy="17.25" r="3.25" stroke="currentColor" stroke-width="2"></circle>
                          </svg></div><span class="text-sm">GPT 탐색하기</span>
                      </a></div>
                  </div>
                  <div class="flex flex-col gap-2 pb-2 text-token-text-primary text-sm">
                    <div><span>
                        <div class="relative mt-5" style="height: auto; opacity: 1;">
                          <div style="opacity: 1;">
                            <h3
                              class="h-9 pb-2 pt-3 px-2 text-xs font-medium text-ellipsis overflow-hidden break-all text-token-text-tertiary">
                              오늘</h3>
                          </div>
                          <ol>
                            <li class="relative z-[15]" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/g/g-SmLuph3oA-future-frontend-mentor/c/f113f641-9698-4a14-b6c4-68421dbdcf28"
                                  class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Template Class 지정 가능
                                    <div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r113:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/g/g-fdb5jLN4j-financial-independence-mentor/c/80ec2ab9-add0-4e25-aab6-a069e3c04113"
                                  class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">보장된 수익 프로젝트 제안<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r118:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                          </ol>
                        </div>
                        <div class="relative mt-5" style="height: auto; opacity: 1;">
                          <div style="opacity: 1;">
                            <h3
                              class="h-9 pb-2 pt-3 px-2 text-xs font-medium text-ellipsis overflow-hidden break-all text-token-text-tertiary">
                              지난 7일</h3>
                          </div>
                          <ol>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 bg-token-sidebar-surface-tertiary">
                                <a href="/c/72e443bc-10e0-4a82-a05f-04e3af332c13" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">게임 ccu 1000명 dau?<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-tertiary w-20 from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 flex"><button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r11f:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span></div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/61a8933e-c7d6-48c3-950c-5b412cbd9e2b" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">SSD GP2, GP3 차이<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r11k:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/191b099f-09a8-4d22-bd41-c327ccfc5fa3" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">TensorFlow GPU 설정<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r11p:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/88b82477-1695-490b-9e06-5a2e351a4f7d" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Python Backend 벤치마킹 도구
                                    <div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r11u:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/g/g-SmLuph3oA-future-frontend-mentor/c/552a2845-e92e-4843-9662-ba814746b6d9"
                                  class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">TailwindCSS hover
                                    transition issue<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r123:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/g/g-SmLuph3oA-future-frontend-mentor/c/1e8fafb0-0b74-4124-8990-e7b1ebb966b4"
                                  class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Ideal Worldcup with
                                    Vue-Tailwind.<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r128:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/91bab9e3-878b-455e-886c-89713849aeca" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">리팩토링 설명 요약<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r12d:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/582d1754-19f7-4fa6-bb8f-92ffce383aab" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">시그너스 msw 생성 요청<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r12i:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/f1e0b742-20e9-497c-a321-80f7fb38bb8a" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">New chat<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r12n:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/f1b222f3-cc14-414a-ad72-73e88f2cca5c" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Prettier 설정 및 적용<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r12s:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/665ecec0-7a75-4393-a256-19dbdb752e12" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Fix MP4 Metadata Issue
                                    <div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r131:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/bbd8d6be-ec51-45ad-a316-6570fb324031" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">유튜브 영상 다운로드 합법?<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r136:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/8360353a-a3b6-4df5-b6c7-a1d9519e5092" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Change filenames with
                                    PowerShell<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r13b:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/g/g-XCW9p2no0-daughter-s-wonder/c/62d1792e-e769-400a-975d-ffce0aa41fce"
                                  class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">New chat<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r13g:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/023c8fe0-10be-4309-8a93-62f7e211294d" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">고기 순서: 부채-&gt;등심<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r13l:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/88f7bee1-3d2e-444b-947e-7571f04159b7" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">침하고 부채살 뭐 먼저?<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r13q:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/b7ae2c3f-39e0-48ea-adc9-e05d8d8729a1" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">GPU에서 Keras 모델 추론<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r13v:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/2d4236cf-3009-4450-829b-b6f8a12f933f" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">New chat<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r144:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/be0617bb-d726-4be7-a8f3-4be18860587a" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Latency Reduction
                                    Strategies<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r149:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/g/g-XCW9p2no0-daughter-s-wonder/c/7c4ec2f4-a786-43e9-917e-87e52cc8be43"
                                  class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">레전드 고양이 모험 시작!<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r14e:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/faecf2bb-3a58-4107-994d-0e5f431ca74c" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">DL・ケルス参戦<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r14j:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                          </ol>
                        </div>
                        <div class="relative mt-5" style="height: auto; opacity: 1;">
                          <div style="opacity: 1;">
                            <h3
                              class="h-9 pb-2 pt-3 px-2 text-xs font-medium text-ellipsis overflow-hidden break-all text-token-text-tertiary">
                              지난 30일</h3>
                          </div>
                          <ol>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/bfb4858e-405d-46b7-b703-7a833ae767e9" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Vue3 체크박스 확인<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r14q:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/g/g-SmLuph3oA-future-frontend-mentor/c/b0e26bff-85f5-4bef-afc2-bf961dcd3559"
                                  class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Sidebar, Main, Button
                                    Transition<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r14v:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/g/g-SmLuph3oA-future-frontend-mentor/c/a1573fa4-f359-4156-a9b2-8410a0f7bf2b"
                                  class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Slide transition for
                                    sidebar<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r154:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/6906affa-d768-4f32-8ce9-7ec9bbf3dba0" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Shark superhero cleans
                                    pollution.<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r159:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/g/g-SmLuph3oA-future-frontend-mentor/c/6eed7b7a-ff87-41fa-ac67-d9335cabd36c"
                                  class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Div 스크롤바 만들기<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r15e:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/g/g-SmLuph3oA-future-frontend-mentor/c/5795d275-4b0e-4134-af5e-c9e04ece2efd"
                                  class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Main Content Router
                                    Placement<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r15j:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/bd08bd81-bc52-430c-88f3-f4ff777c60d0" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">사용자정의 스크롤바 CSS<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r15o:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/29c7e6d7-f842-4d14-81e2-bf3aa6a1e784" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Tailwind 높이와 마진<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r15t:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/ffd3f9f8-89d1-4b85-8d38-280547064c98" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">New chat<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r162:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/g/g-SmLuph3oA-future-frontend-mentor/c/8bd88d08-de91-4b5b-b056-2186ecf4f262"
                                  class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Flex Grid Layout
                                    Solution<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r167:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/e7be4792-bd1b-487f-a998-453511996ca4" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Router Error Resolution
                                    <div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r16c:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/g/g-SmLuph3oA-future-frontend-mentor/c/a2541584-36d1-4081-a719-fc57f3edb2b2"
                                  class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Input validation:
                                    restrict numbers<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r16h:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/e322aea9-e33b-4b0c-8373-1d092015ff7c" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">OTP SVG 생성.<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r16m:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/fac618db-9ca1-46a6-a7ca-706bfe516dca" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">중앙 정렬 라우터 뷰<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r16r:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/g/g-SmLuph3oA-future-frontend-mentor/c/699b3e54-9c57-487c-968e-e3bc40c1cc20"
                                  class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Pinia 변경 값 뷰 문제<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r170:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/g/g-SmLuph3oA-future-frontend-mentor/c/4ac98ad9-2641-472d-a86f-34c048846b43"
                                  class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">반영되지 않는 변수 해결<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r175:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/g/g-SmLuph3oA-future-frontend-mentor/c/9fcedeac-2eb9-48ed-b246-70707b223f97"
                                  class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Sidebar Toggle with
                                    Pinia<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r17a:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/13ca7b79-1028-4b82-b495-a9b899aafe9c" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Flexbox 레이아웃 사용<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r17f:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/2bc801a1-7ea0-4890-bde2-1e570b4eecc6" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Toggle 주석 기능 수정<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r17k:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/36b0d589-1d0b-4d6d-a7a1-e060868267de" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Open WSL2 Ubuntu SSH.
                                    <div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r17p:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/2d8c1d79-7b45-46c5-a2b8-079abdeefb6f" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Logic Apps with
                                    Supabase.<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r17u:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/4176bcac-fb3a-440b-8bd3-0f0eff4db2da" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Graph-based API Logic
                                    Frameworks<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r183:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/g/g-SmLuph3oA-future-frontend-mentor/c/2b1ca678-5bbc-4ed1-b072-ce9c2568061f"
                                  class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Node.js 설정 오류<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r188:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/g/g-SmLuph3oA-future-frontend-mentor/c/399aeebf-b10c-482b-b9ea-f4cc81a2a679"
                                  class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Vue-Tailwind-Electron
                                    Integration<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r18d:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/g/g-SmLuph3oA-future-frontend-mentor/c/895a688c-d830-4f70-84ee-f12df87b5967"
                                  class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Sidebar Toggle with Vue
                                    <div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r18i:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/g/g-SmLuph3oA-future-frontend-mentor/c/46ef9fd1-1c72-43e1-9847-ab422b93b361"
                                  class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">TailwindCSS 사용법 요약<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r18n:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/g/g-SmLuph3oA-future-frontend-mentor/c/a1ce23e8-e025-44e9-9f89-d364e44ea88a"
                                  class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">New chat<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r18s:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/g/g-SmLuph3oA-future-frontend-mentor/c/8e043a70-42a1-4f41-b65e-fcfcdbdaad5c"
                                  class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Nuxt Vue3 Tailwind
                                    TypeScript.<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r191:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/g/g-SmLuph3oA-future-frontend-mentor/c/143440f2-ece4-40ca-bef9-99536e31ea2f"
                                  class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">GetHistories Fetch Data
                                    <div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r196:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/6dbde324-bce4-4f26-b49a-b3330bafceb7" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">ComfyUI Workflow API.
                                    <div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r19b:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/9580481e-8166-49e1-b3dc-77f177916f4b" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">NSFW 모델 비교: TensorFlow
                                    vs. Falconsai<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r19g:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/d6e5ab3d-0831-4115-b26f-f319fe6fba12" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Buy Nvidia stocks now
                                    <div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r19l:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/1bafd9ed-bb55-48b7-a35f-592b00ace5d7" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Nsfw 모델 비교<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r19q:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/d691de5d-50ae-40d6-9a6b-6dfd269f20e0" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Eslint 설정 파일 수정<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r19v:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/bd7e9030-47d6-4dd6-9021-8f462f5a2063" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Material vs Flowbite
                                    <div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1a4:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/g/g-SmLuph3oA-future-frontend-mentor/c/ed7e27a3-34d1-4986-b405-a65d42416ad4"
                                  class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Parse JSON untuk Gambar
                                    <div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1a9:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/99836fb0-3ff1-4d71-b2e3-95d880c3b8b9" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Dummy image generator:
                                    Placeholder.com<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1ae:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/315edba1-4cd8-41f3-8981-328659bbf414" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">이미지 중앙 정렬하기<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1aj:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/g/g-SmLuph3oA-future-frontend-mentor/c/960b9652-6c07-4171-b315-6519a40c2d93"
                                  class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Vue3 TailwindCSS 요구사항
                                    생성.<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1ao:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/e6d6ae11-63dc-4ae8-a604-7c9e2465235c" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">GitHub으로 파일 관리<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1at:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/61f9371e-0953-44ac-b3f5-70f721c2c182" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Vue3 + TypeScript
                                    Galleries<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1b2:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/fddd4d05-8fe4-4ae3-afa1-897f3b5e8325" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Mystical character
                                    creation<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1b7:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/a8f68046-9a4e-4a4f-bdb1-a1970d421a3f" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Summarize Request
                                    Summarize Model<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1bc:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/932a99e5-192e-4bfe-8580-c2928898003c" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Setup &amp; Install
                                    Guide<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1bh:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/727ddfea-cedd-404a-a94a-70c1f67eb95f" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">웹사이트 API 포워딩 방법<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1bm:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/edfa5d6c-69e7-4149-833d-b4be26750f5d" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Different versions of
                                    SAM<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1br:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/f1272e87-4e3c-4077-876e-6ec53011f8d7" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">바쁜 포트를 자동으로 변환<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1c0:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/b1e2d283-9511-4cb8-aa3a-ae3e0a252183" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">조건에 따른 모델 차이점<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1c5:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/7880d9b0-1e0a-4271-a9e4-073911ed2624" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Stable Diffusion WebUI
                                    설치 및 기능<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1ca:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/fbf40589-df5f-48a9-85b0-aa41a3320595" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">SDXL의 CLIP G/L<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1cf:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/bdabb824-9142-414d-bf74-b21760d1b223" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Blade-wielding warrior
                                    in storm.<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1ck:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/07777538-526c-4635-bd6b-6c0e01f8f02a" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Open Source CMS Tools.
                                    <div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1cp:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/77abaf16-b4a1-47d4-9ae3-aa34b5c77afc" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Fooocus? 무슨 뜻인가요?<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1cu:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/3971442c-6454-4d2b-aeb0-fd8d4fa4d1c5" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">OpenPose vs DWPOSE: 비교.
                                    <div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1d3:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/d4fba0e1-8773-450a-975d-1abbdbc52613" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Syno 얼굴 인식 관리<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1d8:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/g/g-SmLuph3oA-future-frontend-mentor/c/8a736e68-5ce3-4a79-9e80-96e24d1af69f"
                                  class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">New chat<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1dd:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/b90563d7-0fb7-46d2-b5c2-14fc9c008cdf" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">New chat<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1di:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/a92b7643-fd31-4f27-9b92-d9b921d0e72e" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">김호중은 대한민국 가수입니다.<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1dn:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/318c346a-a073-4374-8cbc-9f5201ae7743" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">사람들의 문제 모음사이트: Reddit,
                                    Quora, Stack Exchange<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1ds:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/33bff1e9-249d-49ea-9a14-f0106ecf729e" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">SSH 구성 파일 옵션<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1e1:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/a12442bf-9d3f-4fb6-9bc5-6ff6f88df06f" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Zsh와 Oh-My-Zsh 설정<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1e6:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/20133066-650a-4bd2-a873-70e61b6f557a" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Hostname 방법: 환경 변수, 볼륨
                                    <div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1eb:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/3a4efeb9-d002-48ac-ab87-97eee8159377" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">OpenAI 임베딩 기능 요약<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1eg:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/df084f5e-a62c-4163-b0fb-d1ffce9183c5" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">파일 다운로드 명령어 요청<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1el:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/6bdb59c9-7aaa-4ed8-a0af-9f0bb2faf7f6" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Contact with
                                    extraterrestrial beings.<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1eq:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/30d47b33-afa8-4570-a987-a0cbfabd101a" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">에러 해결 방법<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1ev:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/17307756-933d-4b55-aa7b-3357a05bfc34" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Elf on Balcony Art<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1f4:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/fd65247e-99e8-4344-a4c5-aed5f81e11d1" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">URL 코드 공유 방식<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1f9:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/g/g-SmLuph3oA-future-frontend-mentor/c/89db0332-d66c-47f9-9f3d-c014f07c926e"
                                  class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">ImgSli 코드 작성<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1fe:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/0b205956-a0bb-4bae-b6d7-3bb9b9d3bc97" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">CNAME 루트 도메인 등록<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1fj:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/ec2e8b1e-4878-4284-8194-43248253a674" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Electron로 Vue3 통합하기<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1fo:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/c59d64d5-47a9-48ef-89b4-79d045fa4253" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Yarn 문제 해결 방법<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1ft:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/g/g-UcPOhHOLo-image-context-tagger-for-lora-training/c/f6690d6b-ac03-4d65-babe-d72728f69bfe"
                                  class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Anime Character
                                    Illustration: Detailed.<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1g2:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/g/g-mwFdHsh09-lora-captioner/c/29c07dfb-8c14-4977-a009-8d1e22d36234"
                                  class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Images Labeling
                                    Assistance<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1g7:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/78d856cd-56bc-4cf4-bd50-fbe5fb56cab9" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Floating Menu Creation
                                    <div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1gc:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/g/g-hiCniPxg5-consistent-character/c/2783f1c5-c4dd-4ca7-98ce-ba1557c6cda5"
                                  class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">New Scene for Character
                                    <div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1gh:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/g/g-Impe1Ay0j-character-architect/c/1eed5919-e79b-4378-addf-6432908d41d4"
                                  class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Elf Sorcerer Character
                                    Sheet<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1gm:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/658f9eb3-32dd-4b9d-a50e-280b5825ce09" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Menu Link Color Styling
                                    <div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1gr:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/0936f091-2f26-4b26-8916-25a386d1068e" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Vue3 이미지 클릭 네비게이션<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1h0:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/823ca8e2-a5c6-4332-869f-29556046854e" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Favicon 생성 및 적용<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1h5:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/8b42c88d-3228-4977-8f63-647888bc4fa7" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Dropdown Menu Issue
                                    Troubleshooting<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1ha:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/bc0241e4-0e0e-4e34-887e-77bb7fb489c3" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Tailwind CSS div 70% 설정
                                    <div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1hf:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/8e3df835-7551-42a4-88bd-fd67113bcf55" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Pushpin Docker
                                    PowerShell Translation<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1hk:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/71e94b29-b6f8-4d1d-9b7b-81a0e87d5800" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Responsive Router View
                                    Tailwind<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1hp:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/g/g-SmLuph3oA-future-frontend-mentor/c/7df753fa-c34e-489c-853f-0b7404b9b72c"
                                  class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Flex 높이 설정 요약<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1hu:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/3bf71d8d-b0bd-4eb3-b7b5-8a3db93e2ac3" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Tailwind + Flowbite
                                    컴포넌트<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1i3:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/302071c2-dd1c-4126-8d58-da1768b499f5" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">Model Policies
                                    Explained<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1i8:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/g/g-XCW9p2no0-daughter-s-wonder/c/ce35a829-45fd-42a4-a08a-22c2f512f487"
                                  class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">New chat<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1id:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                            <li class="relative" style="opacity: 1; height: auto;">
                              <div
                                class="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <a href="/c/b4213d20-4e37-4253-9622-65019d2073ae" class="flex items-center gap-2 p-2">
                                  <div class="relative grow overflow-hidden whitespace-nowrap">신속한 사기 피해 대응<div
                                      class="absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%">
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                                  <button
                                    class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"
                                    type="button" id="radix-:r1ii:" aria-haspopup="menu" aria-expanded="false"
                                    data-state="closed"><span class="" data-state="closed"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                                          fill="currentColor"></path>
                                      </svg></span></button><span class="" data-state="closed"><button
                                      class="flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary"><svg
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                                          fill="currentColor"></path>
                                      </svg></button></span>
                                </div>
                              </div>
                            </li>
                          </ol>
                        </div>
                      </span><span></span><span></span></div>
                  </div>
                </div>
                <div class="flex flex-col pt-2 empty:hidden dark:border-white/20"><a
                    class="group flex gap-2 p-2.5 text-sm cursor-pointer focus:ring-0 radix-disabled:pointer-events-none radix-disabled:opacity-50 group items-center hover:bg-token-sidebar-surface-secondary m-0 rounded-lg px-2"><span
                      class="flex w-full flex-row flex-wrap-reverse justify-between">
                      <div class="flex items-center gap-2"><span
                          class="flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light"><svg
                            width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                            class="icon-sm shrink-0">
                            <path
                              d="M8.78158 8.60266L9.8188 5.49098C10.037 4.83634 10.963 4.83634 11.1812 5.49098L12.2184 8.60266C12.7187 10.1035 13.8965 11.2813 15.3973 11.7816L18.509 12.8188C19.1637 13.037 19.1637 13.963 18.509 14.1812L15.3973 15.2184C13.8965 15.7187 12.7187 16.8965 12.2184 18.3973L11.1812 21.509C10.963 22.1637 10.037 22.1637 9.8188 21.509L8.78158 18.3973C8.28128 16.8965 7.10354 15.7187 5.60266 15.2184L2.49098 14.1812C1.83634 13.963 1.83634 13.037 2.49098 12.8188L5.60266 11.7816C7.10354 11.2813 8.28128 10.1035 8.78158 8.60266Z"
                              fill="currentColor"></path>
                            <path
                              d="M17.1913 3.69537L17.6794 2.23105C17.7821 1.92298 18.2179 1.92298 18.3206 2.23105L18.8087 3.69537C19.0441 4.40167 19.5983 4.9559 20.3046 5.19133L21.769 5.67944C22.077 5.78213 22.077 6.21787 21.769 6.32056L20.3046 6.80867C19.5983 7.0441 19.0441 7.59833 18.8087 8.30463L18.3206 9.76895C18.2179 10.077 17.7821 10.077 17.6794 9.76895L17.1913 8.30463C16.9559 7.59833 16.4017 7.0441 15.6954 6.80867L14.231 6.32056C13.923 6.21787 13.923 5.78213 14.231 5.67944L15.6954 5.19133C16.4017 4.9559 16.9559 4.40167 17.1913 3.69537Z"
                              fill="currentColor"></path>
                          </svg></span>
                        <div class="flex flex-col"><span>팀 워크스페이스 추가</span><span
                            class="text-xs text-token-text-tertiary line-clamp-1">팀 플랜에서 협업하세요</span></div>
                      </div>
                    </span></a>
                  <div class="flex w-full items-center">
                    <div class="grow">
                      <div class="group relative" data-headlessui-state=""><button
                          class="flex w-full items-center gap-2 rounded-lg p-2 text-sm hover:bg-token-sidebar-surface-secondary  group-ui-open:bg-token-sidebar-surface-secondary"
                          id="headlessui-menu-button-:r1io:" type="button" aria-haspopup="true" aria-expanded="false"
                          data-headlessui-state="">
                          <div class="flex-shrink-0">
                            <div class="flex items-center justify-center overflow-hidden rounded-full">
                              <div class="relative flex"><img alt="User" loading="lazy" width="32" height="32"
                                  decoding="async" data-nimg="1" class="rounded-sm"
                                  src="https://lh3.googleusercontent.com/a/AEdFTp55gprD41-z7s6tKsMPMcANPEdGVnYJpC3ZJGg=s96-c"
                                  style="color: transparent;"></div>
                            </div>
                          </div>
                          <div
                            class="relative -top-px grow -space-y-px overflow-hidden text-ellipsis whitespace-nowrap text-left text-token-text-primary">
                            <div>gawoon choi</div>
                          </div>
                        </button></div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="relative flex h-full max-w-full flex-1 flex-col overflow-hidden">
      <main class="relative h-full w-full flex-1 overflow-auto transition-width">
        <div class="fixed left-0 top-1/2 z-40"
          style="transform: translateX(260px) translateY(-50%) rotate(0deg) translateZ(0px);"><button><span class=""
              data-state="closed">
              <div class="flex h-[72px] w-8 items-center justify-center">
                <div class="flex h-6 w-6 flex-col items-center">
                  <div class="h-3 w-1 rounded-full bg-red-300"
                    style="transform: translateY(0.15rem) rotate(0deg) translateZ(0px);">
                  </div>
                  <div class="h-3 w-1 rounded-full bg-red-300"
                    style="transform: translateY(-0.15rem) rotate(0deg) translateZ(0px);">
                  </div>
                </div>
              </div><span
                style="position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;">사이드바
                닫기</span>
            </span></button></div>
        <div role="presentation" tabindex="0" class="flex h-full flex-col">
          <div class="flex-1 overflow-hidden">
            <div class="react-scroll-to-bottom--css-dfmrg-79elbk h-full">
              <div class="react-scroll-to-bottom--css-dfmrg-1n7m0yu">
                <div class="flex flex-col text-sm pb-9">
                  <div
                    class="sticky top-0 mb-1.5 flex items-center justify-between z-10 h-14 p-2 font-semibold bg-token-main-surface-primary">
                    <div class="absolute left-1/2 -translate-x-1/2"></div>
                    <div class="flex items-center gap-2">
                      <div
                        class="group flex cursor-pointer items-center gap-1 rounded-xl py-2 px-3 text-lg font-medium hover:bg-token-main-surface-secondary radix-state-open:bg-token-main-surface-secondary"
                        type="button" id="radix-:r1j2:" aria-haspopup="menu" aria-expanded="false" data-state="closed">
                        <div>ChatGPT <span class="text-token-text-secondary">4</span></div><svg width="16" height="17"
                          viewBox="0 0 16 17" fill="none" class="text-token-text-tertiary">
                          <path d="M11.3346 7.83203L8.00131 11.1654L4.66797 7.83203" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                      </div>
                    </div>
                    <div class="flex gap-2 pr-1"><button
                        class="btn relative btn-neutral btn-small flex h-9 w-9 items-center justify-center whitespace-nowrap rounded-lg">
                        <div class="flex w-full gap-2 items-center justify-center"><svg width="24" height="24"
                            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-md">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M11.2929 2.29289C11.6834 1.90237 12.3166 1.90237 12.7071 2.29289L16.7071 6.29289C17.0976 6.68342 17.0976 7.31658 16.7071 7.70711C16.3166 8.09763 15.6834 8.09763 15.2929 7.70711L13 5.41421V14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14V5.41421L8.70711 7.70711C8.31658 8.09763 7.68342 8.09763 7.29289 7.70711C6.90237 7.31658 6.90237 6.68342 7.29289 6.29289L11.2929 2.29289ZM4 13C4.55228 13 5 13.4477 5 14V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V14C19 13.4477 19.4477 13 20 13C20.5523 13 21 13.4477 21 14V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V14C3 13.4477 3.44772 13 4 13Z"
                              fill="currentColor"></path>
                          </svg></div>
                      </button></div>
                  </div>
                  <div class="w-full text-token-text-primary" data-testid="conversation-turn-2"
                    style="--avatar-color: #AB68FF;">
                    <div class="px-4 py-2 justify-center text-base md:gap-6 m-auto">
                      <div
                        class="flex flex-1 text-base mx-auto gap-3 md:px-5 lg:px-1 xl:px-5 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] group">
                        <div class="flex-shrink-0 flex flex-col relative items-end">
                          <div>
                            <div class="pt-0.5">
                              <div
                                class="gizmo-shadow-stroke flex h-6 w-6 items-center justify-center overflow-hidden rounded-full">
                                <div class="relative flex"><img alt="User" loading="lazy" width="24" height="24"
                                    decoding="async" data-nimg="1" class="rounded-sm"
                                    src="https://lh3.googleusercontent.com/a/AEdFTp55gprD41-z7s6tKsMPMcANPEdGVnYJpC3ZJGg=s96-c"
                                    style="color: transparent;"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="relative flex w-full flex-col">
                          <div class="font-semibold select-none">당신</div>
                          <div class="flex-col gap-1 md:gap-3">
                            <div class="flex flex-grow flex-col max-w-full">
                              <div data-message-author-role="user"
                                data-message-id="8d3b4430-c8e6-414d-bb71-0c12a64ddd81"
                                class="min-h-[20px] text-message flex flex-col items-start gap-3 whitespace-pre-wrap break-words [.text-message+&amp;]:mt-5 overflow-x-auto">
                                <div class="">게임서비스중인데 ccu 1000명이면 dau가 보통 얼마나 되지?</div>
                              </div>
                            </div>
                            <div class="mt-1 flex justify-start gap-3 empty:hidden">
                              <div
                                class="text-gray-400 flex self-end lg:self-center justify-center lg:justify-start mt-0 -ml-1 h-7 visible">
                                <button
                                  class="p-1 rounded-md text-token-text-tertiary hover:text-token-text-primary md:invisible md:group-hover:visible md:group-[.final-completion]:visible">
                                  <div class="flex items-center gap-1.5 text-xs"><svg width="24" height="24"
                                      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                      class="icon-md">
                                      <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M13.2929 4.29291C15.0641 2.52167 17.9359 2.52167 19.7071 4.2929C21.4783 6.06414 21.4783 8.93588 19.7071 10.7071L18.7073 11.7069L11.1603 19.2539C10.7182 19.696 10.1489 19.989 9.53219 20.0918L4.1644 20.9864C3.84584 21.0395 3.52125 20.9355 3.29289 20.7071C3.06453 20.4788 2.96051 20.1542 3.0136 19.8356L3.90824 14.4678C4.01103 13.8511 4.30396 13.2818 4.7461 12.8397L13.2929 4.29291ZM13 7.41422L6.16031 14.2539C6.01293 14.4013 5.91529 14.591 5.88102 14.7966L5.21655 18.7835L9.20339 18.119C9.40898 18.0847 9.59872 17.9871 9.7461 17.8397L16.5858 11L13 7.41422ZM18 9.5858L14.4142 6.00001L14.7071 5.70712C15.6973 4.71693 17.3027 4.71693 18.2929 5.70712C19.2831 6.69731 19.2831 8.30272 18.2929 9.29291L18 9.5858Z"
                                        fill="currentColor"></path>
                                    </svg></div>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-full text-token-text-primary" data-testid="conversation-turn-3"
                    style="--avatar-color: #AB68FF;">
                    <div class="px-4 py-2 justify-center text-base md:gap-6 m-auto">
                      <div
                        class="flex flex-1 text-base mx-auto gap-3 md:px-5 lg:px-1 xl:px-5 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] group final-completion">
                        <div class="flex-shrink-0 flex flex-col relative items-end">
                          <div>
                            <div class="pt-0.5">
                              <div
                                class="gizmo-shadow-stroke flex h-6 w-6 items-center justify-center overflow-hidden rounded-full">
                                <div class="relative p-1 rounded-sm h-9 w-9 text-white flex items-center justify-center"
                                  style="background-color: rgb(171, 104, 255); width: 24px; height: 24px;"><svg
                                    width="41" height="41" viewBox="0 0 41 41" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" class="icon-sm" role="img"><text x="-9999"
                                      y="-9999">ChatGPT</text>
                                    <path
                                      d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z"
                                      fill="currentColor"></path>
                                  </svg></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="relative flex w-full flex-col agent-turn">
                          <div class="font-semibold select-none">ChatGPT</div>
                          <div class="flex-col gap-1 md:gap-3">
                            <div class="flex flex-grow flex-col max-w-full">
                              <div data-message-author-role="assistant"
                                data-message-id="5af98e92-d30d-49a1-8c8c-3adb32a54ee5"
                                class="min-h-[20px] text-message flex flex-col items-start gap-3 whitespace-pre-wrap break-words [.text-message+&amp;]:mt-5 overflow-x-auto">
                                <div class="markdown prose w-full break-words dark:prose-invert dark">
                                  <p>게임 서비스에서의 CCU(Concurrent Users, 동시 접속자 수)와 DAU(Daily Active Users, 일일 활성 사용자 수)는
                                    서로 다른 개념을 나타냅니다. CCU는 특정 시간에 게임을 이용하는 사용자 수를, DAU는 하루 동안 게임을 이용한 고유 사용자 수를 의미합니다.
                                    CCU 1000명이라고 했을 때 DAU가 얼마나 되는지는 여러 요인에 따라 달라질 수 있습니다. 이는 게임의 성격, 사용자의 활동 패턴, 지역적
                                    특성 등에 따라 크게 변동될 수 있습니다.</p>
                                  <p>일반적으로, DAU를 추정하기 위해서는 게임의 사용자 행동 패턴을 분석해야 합니다. 예를 들어, 게임이 짧은 세션으로 자주 플레이되는 타입이라면,
                                    CCU 대비 DAU 비율이 높을 수 있습니다. 반대로, 장시간 연속 플레이가 필요한 게임의 경우, CCU 대비 DAU 비율이 낮을 수 있습니다.
                                  </p>
                                  <p>대략적인 계산을 위해서는 업계 평균치나 유사 게임의 데이터를 참고하는 것이 좋습니다. 일부 게임에서는 CCU 대비 DAU 비율이 3:1에서
                                    10:1 사이가 될 수 있습니다. 즉, CCU가 1000명일 경우, DAU는 3000명에서 10000명 사이일 가능성이 있습니다. 하지만 이는 매우
                                    조건적인 추정이며, 정확한 수치를 얻기 위해서는 해당 게임의 실제 사용자 데이터 분석이 필요합니다.</p>
                                </div>
                              </div>
                            </div>
                            <div class="mt-1 flex justify-start gap-3 empty:hidden">
                              <div
                                class="text-gray-400 flex self-end lg:self-center justify-center lg:justify-start mt-0 -ml-1 h-7 visible">
                                <span class="" data-state="closed"><button
                                    class="flex items-center gap-1.5 rounded-md p-1 text-xs text-token-text-tertiary hover:text-token-text-primary md:invisible md:group-hover:visible md:group-[.final-completion]:visible"><svg
                                      width="24" height="24" viewBox="0 0 24 24" fill="none"
                                      xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                      <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M12 4C10.8954 4 10 4.89543 10 6H14C14 4.89543 13.1046 4 12 4ZM8.53513 4C9.22675 2.8044 10.5194 2 12 2C13.4806 2 14.7733 2.8044 15.4649 4H17C18.6569 4 20 5.34315 20 7V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V7C4 5.34315 5.34315 4 7 4H8.53513ZM8 6H7C6.44772 6 6 6.44772 6 7V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V7C18 6.44772 17.5523 6 17 6H16C16 7.10457 15.1046 8 14 8H10C8.89543 8 8 7.10457 8 6Z"
                                        fill="currentColor"></path>
                                    </svg></button></span><span class="" data-state="closed"><button
                                    class="p-1 rounded-md text-token-text-tertiary hover:text-token-text-primary md:invisible md:group-hover:visible md:group-[.final-completion]:visible">
                                    <div class="flex items-center gap-1.5 text-xs"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M4.5 2.5C5.05228 2.5 5.5 2.94772 5.5 3.5V5.07196C7.19872 3.47759 9.48483 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C7.1307 21.5 3.11828 17.8375 2.565 13.1164C2.50071 12.5679 2.89327 12.0711 3.4418 12.0068C3.99033 11.9425 4.48712 12.3351 4.5514 12.8836C4.98798 16.6089 8.15708 19.5 12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C9.7796 4.5 7.7836 5.46469 6.40954 7H9C9.55228 7 10 7.44772 10 8C10 8.55228 9.55228 9 9 9H4.5C3.96064 9 3.52101 8.57299 3.50073 8.03859C3.49983 8.01771 3.49958 7.99677 3.5 7.9758V3.5C3.5 2.94772 3.94771 2.5 4.5 2.5Z"
                                          fill="currentColor"></path>
                                      </svg></div>
                                  </button></span>
                                <div class="flex"><span class="" data-state="closed"><button
                                      class="p-1 rounded-md text-token-text-tertiary hover:text-token-text-primary md:invisible md:group-hover:visible md:group-[.final-completion]:visible"><svg
                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="icon-md">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M11.8727 21.4961C11.6725 21.8466 11.2811 22.0423 10.8805 21.9922L10.4267 21.9355C7.95958 21.6271 6.36855 19.1665 7.09975 16.7901L7.65054 15H6.93226C4.29476 15 2.37923 12.4921 3.0732 9.94753L4.43684 4.94753C4.91145 3.20728 6.49209 2 8.29589 2H18.0045C19.6614 2 21.0045 3.34315 21.0045 5V12C21.0045 13.6569 19.6614 15 18.0045 15H16.0045C15.745 15 15.5054 15.1391 15.3766 15.3644L11.8727 21.4961ZM14.0045 4H8.29589C7.39399 4 6.60367 4.60364 6.36637 5.47376L5.00273 10.4738C4.65574 11.746 5.61351 13 6.93226 13H9.00451C9.32185 13 9.62036 13.1506 9.8089 13.4059C9.99743 13.6612 10.0536 13.9908 9.96028 14.2941L9.01131 17.3782C8.6661 18.5002 9.35608 19.6596 10.4726 19.9153L13.6401 14.3721C13.9523 13.8258 14.4376 13.4141 15.0045 13.1902V5C15.0045 4.44772 14.5568 4 14.0045 4ZM17.0045 13V5C17.0045 4.64937 16.9444 4.31278 16.8338 4H18.0045C18.5568 4 19.0045 4.44772 19.0045 5V12C19.0045 12.5523 18.5568 13 18.0045 13H17.0045Z"
                                          fill="currentColor"></path>
                                      </svg></button></span></div>
                              </div>
                            </div>
                            <div class="pr-2 lg:pr-0"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="w-full pt-2 md:pt-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:w-[calc(100%-.5rem)]">
            <form
              class="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
              <div class="relative flex h-full flex-1 flex-col">
                <div class="flex w-full items-center">
                  <div
                    class="overflow-hidden [&amp;:has(textarea:focus)]:border-token-border-xheavy [&amp;:has(textarea:focus)]:shadow-[0_2px_6px_rgba(0,0,0,.05)] flex flex-col w-full dark:border-token-border-medium flex-grow relative border border-token-border-medium dark:text-white rounded-2xl bg-token-main-surface-primary">
                    <textarea id="prompt-textarea" tabindex="0" data-id="5af98e92-d30d-49a1-8c8c-3adb32a54ee5" rows="1"
                      placeholder="ChatGPT에게 메시지를 작성하세요…"
                      class="m-0 w-full resize-none border-0 bg-transparent focus:ring-0 focus-visible:ring-0 dark:bg-transparent max-h-25 py-[10px] pr-10 md:py-3.5 md:pr-12 placeholder-black/50 dark:placeholder-white/50 pl-10 md:pl-[55px]"
                      style="height: 52px; overflow-y: hidden;"></textarea>
                    <div class="absolute bottom-2 md:bottom-3 left-2 md:left-4">
                      <div class="flex"><button class="btn relative p-0 text-black dark:text-white" aria-label="파일 첨부">
                          <div class="flex w-full gap-2 items-center justify-center"><svg width="24" height="24"
                              viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M9 7C9 4.23858 11.2386 2 14 2C16.7614 2 19 4.23858 19 7V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9C5 8.44772 5.44772 8 6 8C6.55228 8 7 8.44772 7 9V15C7 17.7614 9.23858 20 12 20C14.7614 20 17 17.7614 17 15V7C17 5.34315 15.6569 4 14 4C12.3431 4 11 5.34315 11 7V15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15V9C13 8.44772 13.4477 8 14 8C14.5523 8 15 8.44772 15 9V15C15 16.6569 13.6569 18 12 18C10.3431 18 9 16.6569 9 15V7Z"
                                fill="currentColor"></path>
                            </svg></div>
                        </button><input multiple="" type="file" tabindex="-1" class="hidden" style="display: none;">
                      </div>
                    </div><button disabled=""
                      class="absolute bottom-1.5 right-2 rounded-lg border border-black bg-black p-0.5 text-white transition-colors enabled:bg-black disabled:text-gray-400 disabled:opacity-10 dark:border-white dark:bg-white dark:hover:bg-white md:bottom-3 md:right-3"
                      data-testid="send-button"><span class="" data-state="closed"><svg width="24" height="24"
                          viewBox="0 0 24 24" fill="none" class="text-white dark:text-black">
                          <path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg></span></button>
                  </div>
                </div>
              </div>
            </form>
            <div class="relative px-2 py-2 text-center text-xs text-token-text-secondary md:px-[60px]"><span>ChatGPT는
                실수를 할 수 있습니다. 중요한 정보는 확인해 주세요.</span></div>
          </div>
        </div>
        <div class="group fixed bottom-3 right-3 z-10 hidden gap-1 lg:flex">
          <div class="group relative" data-headlessui-state=""><button
              class="flex items-center justify-center rounded-full border border-token-border-light text-token-text-secondary"
              id="headlessui-menu-button-:r1ir:" type="button" aria-haspopup="true" aria-expanded="false"
              data-headlessui-state="">
              <div class="flex h-6 w-6 items-center justify-center text-xs">?</div>
            </button></div>
        </div>
      </main>
    </div>
  </div>
  <div class="absolute left-0 right-0 top-0 z-[2]"></div><audio class="fixed bottom-0 left-0 hidden h-0 w-0" autoplay=""
    crossorigin="anonymous"></audio>
</template>