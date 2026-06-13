// 미술 작품 데이터 저장소 (요청하신 6개의 명작 데이터 모델 구성)
const artPieces = [
    {
        id: "art-1",
        title: "아무도 기다리지 않았다 (They Did Not Expect Him)",
        artist: "일리야 레핀 (Ilya Repin)",
        year: "1884",
        imageUrl: "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/71eP/image/cpM1rAW7tauWyhYgHfz4W_EQ7HY.jpg",
        description: "러시아 혁명가 또는 유배자가 예고도 없이 갑작스럽게 집으로 돌아온 극적인 순간을 포착한 일리야 레핀의 마스터피스입니다. 문을 열고 들어오는 사내의 초라하고 불안한 모습과 그를 바라보는 어머니, 아내, 자녀들의 놀라움과 어색함, 반가움이 교차하는 복잡한 심리 상태가 인물들의 눈빛과 표정에 생생하게 묘사되어 있습니다.",
        isLiked: false,
        comments: []
    },
    {
        id: "art-2",
        title: "1581년 11월 16일, 이반 뇌제와 그의 아들 (Ivan the Terrible and His Son Ivan)",
        artist: "일리야 레핀 (Ilya Repin)",
        year: "1885",
        imageUrl: "https://static01.nyt.com/images/2018/05/28/world/28russia-painting-2/28russia-painting-2-superJumbo.jpg?quality=75&auto=webp",
        description: "러시아 역사상 가장 끔찍한 비극 중 하나인, 이반 뇌제가 홧김에 자신의 아들을 지팡이로 쳐서 죽음에 이르게 한 직후의 참혹한 순간을 그린 작품입니다. 아들을 피투성이로 안고 광기에 가득 찬 눈으로 뒤늦은 후회와 공포를 느끼는 이반 뇌제의 황량한 눈빛은 보는 이에게 깊은 충격을 안겨줍니다.",
        isLiked: false,
        comments: []
    },
    {
        id: "art-3",
        title: "오스만 제국의 파디샤 메흐메트 4세에게 답장을 보내는 자포로지예의 카자크",
        artist: "일리야 레핀 (Ilya Repin)",
        year: "1891",
        imageUrl: "https://archivenew.vop.co.kr/images/cdcfc3e484a1b92ecab31ba7e4109c20/2021-10/marked/14054515_11.jpg",
        description: "오스만 제국 황제의 항복 권고 편지를 받은 카자크 전사들이 온갖 조롱과 욕설을 섞어 답장을 작성하며 호쾌하게 웃어젖히는 장면을 그린 거작입니다. 그림 속 인물 한 명 한 명의 고유한 웃음소리가 화면 밖으로 들리는 듯한 놀라운 생동감과 카자크족 특유의 자유분방하고 거친 기개가 압권입니다.",
        isLiked: false,
        comments: []
    },
    {
        id: "art-4",
        title: "오네긴과 렌스키의 결투 (The Duel of Onegin and Lensky)",
        artist: "일리야 레핀 (Ilya Repin)",
        year: "1899",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLavjc0cMl5ky7oyE1lTeIdH6JcvZaNSlKcA&s",
        description: "푸시킨의 유명한 운문 소설 '유진 오네긴'의 가장 비극적인 하이라이트인 두 친구의 결투 장면을 묘사한 작품입니다. 사소한 오해와 질투, 그리고 사회적 체면 때문에 서로에게 총구를 겨눠야만 하는 오네긴과 렌스키의 서늘하고 쓸쓸한 운명적 긴장감이 설원을 배경으로 차갑게 녹아들어 있습니다.",
        isLiked: false,
        comments: []
    },
    {
        id: "art-5",
        title: "이카루스 (Icarus)",
        artist: "앙리 마티스 (Henri Matisse)",
        year: "1947",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWbiMApCy9XYUmRh362MDYVRKr84Ft4RHPazQN3dutBDHBXCccDp5Frdg&s=10",
        description: "앙리 마티스가 노년에 병마와 싸우며 가위와 색종이만을 이용해 완성한 '컷아웃(Paper Cutouts)' 기법의 전설적인 작품입니다. 미니멀하게 절제된 파란 배경 속 춤추는 듯 떨어지는 검은 실루엣의 이카루스, 그리고 그의 가슴속 붉은 심장은 신화를 넘어 인간의 영원한 열정과 자유에 대한 갈망을 상징합니다.",
        isLiked: false,
        comments: []
    },
    {
        id: "art-6",
        title: "골콩드 (Golconda / 겨울비)",
        artist: "르네 마그리트 (René Magritte)",
        year: "1953",
        imageUrl: "https://m.imaeil.com/photos/2019/02/25/2019022506160495484_l.jpg",
        description: "초현실주의의 거장 르네 마그리트가 그린 기묘하고도 매혹적인 작품입니다. 중산모를 쓰고 코트를 입은 똑같은 모습의 신사들이 하늘에서 비처럼 중력 없이 무수히 쏟아져 내리는(혹은 허공에 떠 있는) 풍경을 통해, 현대 사회 속 인간들의 기계적인 익명성과 획일성을 위트 있게 풍자하고 있습니다.",
        isLiked: false,
        comments: []
    }
];

let activeCardId = null;

// 1. 초기 갤러리 메인 그리드 리스트 그리기
function initGallery() {
    const grid = document.getElementById('galleryGrid');
    grid.innerHTML = artPieces.map(art => `
        <div class="art-card" data-id="${art.id}" onclick="openDetail(this, '${art.id}')">
            <div class="card-image-wrap">
                <img src="${art.imageUrl}" alt="${art.title}" id="img-${art.id}">
            </div>
            <div class="card-info">
                <span class="art-year">${art.year}</span>
                <h2 class="art-title">${art.title}</h2>
                <p class="art-artist">${art.artist}</p>
            </div>
        </div>
    `).join('');
}

// 2. 카드 클릭 시 상세 화면 오픈
function openDetail(cardElement, id) {
    activeCardId = id;
    const art = artPieces.find(p => p.id === id);
    const originImg = document.getElementById(`img-${id}`);
    const originRect = originImg.getBoundingClientRect();
    
    const detailContent = document.getElementById('detailContent');
    detailContent.innerHTML = `
        <div class="detail-image-side">
            <img src="${art.imageUrl}" alt="${art.title}" id="detail-target-img">
        </div>
        <div class="detail-text-side">
            <span class="detail-year">${art.year}</span>
            
            <div class="title-action-row">
                <h2 class="detail-title">${art.title}</h2>
                <button class="like-btn ${art.isLiked ? 'liked' : ''}" onclick="toggleLike('${art.id}')" id="likeBtn">
                    <svg viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                </button>
            </div>
            
            <p class="detail-artist">${art.artist}</p>
            <div class="detail-divider"></div>
            <h3>작품 해설</h3>
            <p class="detail-description">${art.description}</p>
            
            <div class="detail-divider"></div>
            
            <div class="comments-section">
                <h3>댓글 피드</h3>
                <div class="comment-form">
                    <input type="text" class="comment-input" id="commentInput" placeholder="이 작품에 대한 감상을 남겨주세요...">
                    <button class="comment-submit-btn" onclick="addComment('${art.id}')">등록</button>
                </div>
                <div class="comments-list" id="commentsList">
                    </div>
            </div>
        </div>
    `;

    renderComments(art);

    const cloneContainer = document.createElement('div');
    cloneContainer.className = 'hero-transition-element';
    cloneContainer.style.top = `${originRect.top}px`;
    cloneContainer.style.left = `${originRect.left}px`;
    cloneContainer.style.width = `${originRect.width}px`;
    cloneContainer.style.height = `${originRect.height}px`;

    const cloneImg = document.createElement('img');
    cloneImg.src = art.imageUrl;
    cloneContainer.appendChild(cloneImg);
    document.body.appendChild(cloneContainer);

    const overlay = document.getElementById('detailOverlay');
    overlay.style.display = 'block';
    
    requestAnimationFrame(() => {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';

        const targetImg = document.getElementById('detail-target-img');
        const targetRect = targetImg.getBoundingClientRect();

        cloneContainer.style.top = `${targetRect.top}px`;
        cloneContainer.style.left = `${targetRect.left}px`;
        cloneContainer.style.width = `${targetRect.width}px`;
        cloneContainer.style.height = `${targetRect.height}px`;
        cloneContainer.style.borderRadius = '0px';
    });

    setTimeout(() => {
        if (cloneContainer.parentNode) {
            cloneContainer.parentNode.removeChild(cloneContainer);
        }
    }, 450);
}

// 3. 좋아요 토글 기능
function toggleLike(id) {
    const art = artPieces.find(p => p.id === id);
    art.isLiked = !art.isLiked;

    const likeBtn = document.getElementById('likeBtn');
    if (art.isLiked) {
        likeBtn.classList.add('liked');
    } else {
        likeBtn.classList.remove('liked');
    }
}

// 4. 댓글 등록 로직
function addComment(id) {
    const input = document.getElementById('commentInput');
    const text = input.value.trim();
    if (!text) return;

    const art = artPieces.find(p => p.id === id);
    
    const newComment = {
        user: "익명의 관람객",
        text: text,
        date: new Date().toLocaleDateString('ko-KR', { hour: '2-digit', minute: '2-digit' })
    };

    art.comments.unshift(newComment);
    input.value = '';
    
    renderComments(art);
}

// 5. 댓글 리스트 렌더링
function renderComments(art) {
    const listContainer = document.getElementById('commentsList');
    if (art.comments.length === 0) {
        listContainer.innerHTML = `<p style="color: #999; font-size: 14px; text-align: center; padding: 20px 0;">첫 번째 댓글을 남겨보세요.</p>`;
        return;
    }

    listContainer.innerHTML = art.comments.map(c => `
        <div class="comment-item">
            <div class="comment-header">
                <span class="comment-user">${c.user}</span>
                <span class="comment-date">${c.date}</span>
            </div>
            <p class="comment-text">${c.text}</p>
        </div>
    `).join('');
}

// 뒤로가기 액션
function closeDetail() {
    if (!activeCardId) return;

    const overlay = document.getElementById('detailOverlay');
    const targetImg = document.getElementById('detail-target-img');
    const originImg = document.getElementById(`img-${activeCardId}`);
    
    if (!targetImg || !originImg) {
        overlay.classList.remove('active');
        overlay.style.display = 'none';
        document.body.style.overflow = '';
        return;
    }

    const targetRect = targetImg.getBoundingClientRect();
    const originRect = originImg.getBoundingClientRect();
    const art = artPieces.find(p => p.id === activeCardId);

    const cloneContainer = document.createElement('div');
    cloneContainer.className = 'hero-transition-element';
    cloneContainer.style.top = `${targetRect.top}px`;
    cloneContainer.style.left = `${targetRect.left}px`;
    cloneContainer.style.width = `${targetRect.width}px`;
    cloneContainer.style.height = `${targetRect.height}px`;
    cloneContainer.style.borderRadius = '0px';

    const cloneImg = document.createElement('img');
    cloneImg.src = art.imageUrl;
    cloneContainer.appendChild(cloneImg);
    document.body.appendChild(cloneContainer);

    overlay.classList.remove('active');
    document.body.style.overflow = '';

    requestAnimationFrame(() => {
        cloneContainer.style.top = `${originRect.top}px`;
        cloneContainer.style.left = `${originRect.left}px`;
        cloneContainer.style.width = `${originRect.width}px`;
        cloneContainer.style.height = `${originRect.height}px`;
        cloneContainer.style.borderRadius = '24px';
    });

    setTimeout(() => {
        if (cloneContainer.parentNode) {
            cloneContainer.parentNode.removeChild(cloneContainer);
        }
        overlay.style.display = 'none';
        activeCardId = null;
    }, 450);
}

window.onload = initGallery;