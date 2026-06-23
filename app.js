// 미술 작품 데이터 저장소 (기획전: 노동의 존엄성 : 프로테스탄트 노동윤리와 미술)
const artPieces = [
    {
        id: "art-1",
        title: "돌 깨는 사람들 (The Stone Breakers)",
        artist: "귀스타브 쿠르베 (Gustav Courbet)",
        year: "1849",
        imageUrl: "https://share.google/pAOyvSqvIB01Udf7X",
        description: "사실주의(리얼리즘)의 거장 쿠르베가 노동의 가혹한 현실을 여과 없이 포착한 기념비적인 작품입니다. 세습되는 빈곤과 고단한 육체노동을 하는 노인과 소년의 모습을 이상화나 미화 없이 거칠고 사실적인 필치로 그려내어 당대 사회에 큰 충격을 주었습니다.",
        isLiked: false,
        comments: []
    },
    {
        id: "art-2",
        title: "오르낭의 매장 (A Burial At Ornans)",
        artist: "귀스타브 쿠르베 (Gustav Courbet)",
        year: "1849",
        imageUrl: "https://share.google/kqVi2D3UzWXlansCa",
        description: "전통적으로 신화나 역사 속 영웅들에게만 허락되었던 거대한 크기의 캔버스에, 평범한 시골 마을 주민들의 장례식 풍경을 있는 그대로 그려낸 쿠르베의 또 다른 대표작입니다. 평범한 인간의 죽음과 삶 역시 종교적·역사적 사건만큼이나 엄숙하고 존엄하다는 것을 웅변합니다.",
        isLiked: false,
        comments: []
    },
    {
        id: "art-3",
        title: "이삭 줍기 (The Gleaners)",
        artist: "장 프랑수아 밀레 (Jean-François Millet)",
        year: "1857",
        imageUrl: "https://share.google/LCvflXNb8E2KALnj9",
        description: "수확이 끝난 거친 밭에서 남겨진 이삭을 줍고 있는 세 여인의 모습을 숭고하고 대지 같은 무게감으로 표현한 밀레의 마스터피스입니다. 허리를 굽혀 묵묵히 일하는 그들의 뒷모습은 프로테스탄트적인 노동의 신성함과 고요한 경건함을 자아냅니다.",
        isLiked: false,
        comments: []
    },
    {
        id: "art-4",
        title: "만종 (The Angelus)",
        artist: "장 프랑수아 밀레 (Jean-François Millet)",
        year: "1859",
        imageUrl: "https://share.google/f2oj29a71N3WPsPya",
        description: "하루의 고된 농사일을 마치고 멀리서 들려오는 교회의 저녁 종소리에 맞춰 부부가 경건하게 감사의 기도를 올리는 장면입니다. 소박한 노동의 현장과 신앙이 결합된 가장 아름다운 순간으로, 노동의 종말이 곧 신을 향한 예배로 이어지는 서정적인 분위기가 압권입니다.",
        isLiked: false,
        comments: []
    },
    {
        id: "art-5",
        title: "감자 먹는 사람들 (The Potato Eaters)",
        artist: "빈센트 반 고흐 (Vincent van Gogh)",
        year: "1885",
        imageUrl: "https://share.google/t8D10BrEpz8nacS7v",
        description: "반 고흐가 스스로 자신의 첫 번째 걸작이라 칭했던 초기 리얼리즘 시기 작품입니다. 희미한 등불 아래, 자신들이 직접 거친 흙을 파서 수확한 감자를 나누어 먹는 광부와 농민들의 모습을 통해 손으로 노동하는 이들의 정직한 삶과 그들이 지닌 깊은 유대감을 투박하고 진실되게 담아냈습니다.",
        isLiked: false,
        comments: []
    },
    {
        id: "art-6",
        title: "직조공 (The Weaver)",
        artist: "빈센트 반 고흐 (Vincent van Gogh)",
        year: "1884",
        imageUrl: "https://share.google/3DOR2xknjFUzjgus1",
        description: "네덜란드 누에넨 시절, 고흐가 거대한 베틀 앞에 앉아 기계의 일부처럼 묵묵히 직물을 짜내려가는 직조공들의 고독하고 치열한 노동 환경을 깊이 관찰하여 그린 작품입니다. 어두운 방안에서 묵직한 가업을 잇는 노동자의 실루엣이 엄숙한 분위기를 풍깁니다.",
        isLiked: false,
        comments: []
    },
    {
        id: "art-7",
        title: "건설자들 (The Builders)",
        artist: "페르낭 레제 (Fernand Léger)",
        year: "1950",
        imageUrl: "https://share.google/8EnkLkDrJTm98gVep",
        description: "20세기 큐비즘과 기계 미학의 거장 페르낭 레제가 전후 사회를 재건하는 노동자들의 활기차고 당당한 모습을 찬미한 현대 명작입니다. 거대한 철골 구조물과 인간의 신체를 기하학적이고 대담한 원색으로 대비시켜, 현대 산업 사회 속에서 주체적으로 미래를 건설해 나가는 인류의 연대와 노동의 에너지를 힘있게 시각화했습니다.",
        isLiked: false,
        comments: []
    }
];

let activeCardId = null;

// 플로팅 버튼 및 모달 창 자동 생성 함수
function createUploadUI() {
    const floatBtn = document.createElement('button');
    floatBtn.id = 'uploadFloatBtn';
    floatBtn.innerHTML = '+';
    floatBtn.style.cssText = `
        position: fixed; bottom: 30px; right: 30px; width: 44px; height: 44px;
        background: #262626; color: white; border: none; border-radius: 50%;
        font-size: 24px; font-weight: normal; cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.15);
        z-index: 999; display: flex; align-items: center; justify-content: center; transition: transform 0.2s;
    `;
    floatBtn.onmouseover = () => floatBtn.style.transform = 'scale(1.05)';
    floatBtn.onmouseout = () => floatBtn.style.transform = 'scale(1)';
    floatBtn.onclick = toggleUploadModal;
    document.body.appendChild(floatBtn);

    const modal = document.createElement('div');
    modal.id = 'uploadModal';
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.5); display: none; align-items: center; justify-content: center;
        z-index: 1000; padding: 20px; box-sizing: border-box;
    `;
    
    modal.innerHTML = `
        <div style="background: white; width: 100%; max-width: 500px; padding: 24px; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.2); position: relative; display: flex; flex-direction: column; gap: 12px;">
            <button onclick="toggleUploadModal()" style="position: absolute; top: 14px; right: 16px; background: none; border: none; font-size: 24px; cursor: pointer; color: #8e8e8e; line-height: 1;">&times;</button>
            <div style="height: 10px;"></div>
            <input type="text" id="newArtTitle" placeholder="작품 제목 (필수)" style="width: 100%; padding: 10px 12px; border: 1px solid #dbdbdb; border-radius: 6px; box-sizing: border-box; font-size: 14px;">
            <input type="text" id="newArtArtist" placeholder="작가 이름" style="width: 100%; padding: 10px 12px; border: 1px solid #dbdbdb; border-radius: 6px; box-sizing: border-box; font-size: 14px;">
            <input type="text" id="newArtYear" placeholder="제작 연도 (예: 1950)" style="width: 100%; padding: 10px 12px; border: 1px solid #dbdbdb; border-radius: 6px; box-sizing: border-box; font-size: 14px;">
            <input type="text" id="newArtUrl" placeholder="이미지 URL 주소 (필수)" style="width: 100%; padding: 10px 12px; border: 1px solid #dbdbdb; border-radius: 6px; box-sizing: border-box; font-size: 14px;">
            <textarea id="newArtDesc" placeholder="작품 해설 혹은 감상 포인트를 적어주세요..." rows="4" style="width: 100%; padding: 10px 12px; border: 1px solid #dbdbdb; border-radius: 6px; box-sizing: border-box; resize: none; font-family: inherit; font-size: 14px;"></textarea>
            <button onclick="addCustomArt()" style="width: 100%; padding: 12px; background: #262626; color: white; border: none; border-radius: 6px; font-weight: bold; font-size: 15px; cursor: pointer; margin-top: 6px;">피드 게시하기</button>
        </div>
    `;
    document.body.appendChild(modal);
}

function toggleUploadModal() {
    const modal = document.getElementById('uploadModal');
    if (!modal) return;
    if (modal.style.display === 'none' || modal.style.display === '') {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    } else {
        modal.style.display = 'none';
        if (!activeCardId) document.body.style.overflow = '';
    }
}

function addCustomArt() {
    const titleInput = document.getElementById('newArtTitle');
    const artistInput = document.getElementById('newArtArtist');
    const yearInput = document.getElementById('newArtYear');
    const urlInput = document.getElementById('newArtUrl');
    const descInput = document.getElementById('newArtDesc');

    if (!titleInput.value.trim() || !urlInput.value.trim()) {
        alert('작품 제목과 이미지 URL 주소는 필수입니다!');
        return;
    }

    const newArt = {
        id: `art-${Date.now()}`,
        title: titleInput.value.trim(),
        artist: artistInput.value.trim() || "익명의 작가",
        year: yearInput.value.trim() || "연도 미상",
        imageUrl: urlInput.value.trim(),
        description: descInput.value.trim() || "등록된 작품 해설이 없습니다.",
        isLiked: false,
        comments: []
    };

    artPieces.unshift(newArt);

    titleInput.value = '';
    artistInput.value = '';
    yearInput.value = '';
    urlInput.value = '';
    descInput.value = '';

    toggleUploadModal();
    initGallery();
}

// 1. 초기 갤러리 메인 그리드 리스트 그리기
function initGallery() {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;
    
    grid.innerHTML = artPieces.map(art => {
        const initialBadge = art.artist.trim().charAt(0);

        return `
            <div class="art-card" data-id="${art.id}" onclick="openDetail(this, '${art.id}')">
                
                <div class="feed-profile-bar" style="display: flex; align-items: center; padding: 12px 16px; background: #fff;">
                    <div class="profile-avatar" style="width: 34px; height: 34px; background: #eaeaea; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; color: #333; margin-right: 10px;">
                        ${initialBadge}
                    </div>
                    <div class="profile-info" style="display: flex; flex-direction: column;">
                        <span class="profile-artist" style="font-size: 14px; font-weight: 600; color: #262626;">${art.artist}</span>
                    </div>
                </div>

                <div class="card-image-wrap">
                    <img src="${art.imageUrl}" alt="${art.title}" id="img-${art.id}">
                </div>

                <div class="card-info" style="padding: 12px 16px;">
                    
                    <div class="feed-action-bar" style="display: flex; gap: 14px; margin-bottom: 10px; align-items: center;">
                        <div class="feed-action-icon" onclick="toggleLike('${art.id}'); event.stopPropagation();" style="cursor: pointer; width: 24px; height: 24px; display: block; flex-shrink: 0;">
                            <svg viewBox="0 0 24 24" id="mainLike-${art.id}" style="width: 24px; height: 24px; display: block; fill: ${art.isLiked ? '#ed4956' : 'none'}; stroke: ${art.isLiked ? '#ed4956' : '#262626'}; stroke-width: 2;">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                        </div>
                        <div class="feed-action-icon" style="width: 24px; height: 24px; display: block; flex-shrink: 0;">
                            <svg viewBox="0 0 24 24" style="width: 24px; height: 24px; display: block; fill: none; stroke: #262626; stroke-width: 2; transform: scaleX(-1);">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                            </svg>
                        </div>
                    </div>

                    <div class="feed-caption-area">
                        <span class="art-year" style="display: block; font-size: 12px; color: #8e8e8e; margin-bottom: 4px;">${art.year}년작</span>
                        <h2 class="art-title" style="font-size: 15px; font-weight: bold; color: #262626; margin: 0 0 6px 0; line-height: 1.3;">${art.title}</h2>
                        <p class="art-artist" style="font-size: 13px; color: #444; line-height: 1.5; margin: 0; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
                            ${art.description}
                        </p>
                    </div>

                    <div class="feed-comments-preview" id="commentCount-${art.id}" style="font-size: 13px; color: #8e8e8e; margin-top: 8px;">
                        ${art.comments.length > 0 ? `댓글 ${art.comments.length}개 모두 보기` : '댓글 작성하기...'}
                    </div>

                </div>
            </div>
        `;
    }).join('');
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
                    <svg viewBox="0 0 24 24" style="width:24px; height:24px; display:block;">
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
                <div class="comments-list" id="commentsList"></div>
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
    if (!art) return;

    art.isLiked = !art.isLiked;

    const likeBtn = document.getElementById('likeBtn');
    if (likeBtn) {
        if (art.isLiked) likeBtn.classList.add('liked');
        else likeBtn.classList.remove('liked');
    }

    const mainLikeIcon = document.getElementById(`mainLike-${id}`);
    if (mainLikeIcon) {
        if (art.isLiked) {
            mainLikeIcon.style.fill = '#ed4956';
            mainLikeIcon.style.stroke = '#ed4956';
        } else {
            mainLikeIcon.style.fill = 'none';
            mainLikeIcon.style.stroke = '#262626';
        }
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

    const previewLabel = document.getElementById(`commentCount-${id}`);
    if (previewLabel) {
        previewLabel.innerText = `댓글 ${art.comments.length}개 모두 보기`;
    }
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

// 6. 뒤로가기 액션
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

// 로드 시 실행
window.onload = function() {
    initGallery();
    createUploadUI();

    const oldContainer = document.querySelector('.art-upload-container');
    if (oldContainer) {
        oldContainer.remove();
    }
};
