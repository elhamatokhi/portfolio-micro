// Project Card Data
const datacards = [
  {
    project_img: 'Images/p1.PNG',
    project_title: 'Facebook 360',
    project_info_title: 'CANOPY',
    counter_image: 'Images/dot.svg',
    project_info_text: ['Back End Dev', '2015'],
    project_description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['html', 'css', 'javascript'],
    live_version: 'https://github.com/elhamatokhi/portfolio-micro',
    source_code: 'https://github.com/elhamatokhi/portfolio-micro',
  },
  {
    project_img: 'Images/p2.PNG',
    project_title: 'Facebook 360',
    project_info_title: 'CANOPY',
    counter_image: 'Images/dot.svg',
    project_info_text: ['Back End Dev', '2015'],
    project_description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['html', 'css', 'javascript'],
    live_version: 'https://github.com/elhamatokhi/portfolio-micro',
    source_code: 'https://github.com/elhamatokhi/portfolio-micro',
  },
  {
    project_img: 'Images/p3.PNG',
    project_title: 'Facebook 360',
    project_info_title: 'CANOPY',
    counter_image: 'Images/dot.svg',
    project_info_text: ['Back End Dev', '2015'],
    project_description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['html', 'css', 'javascript'],
    live_version: 'https://github.com/elhamatokhi/portfolio-micro',
    source_code: 'https://github.com/elhamatokhi/portfolio-micro',
  },
  {
    project_img: 'Images/p4.PNG',
    project_title: 'Facebook 360',
    project_info_title: 'CANOPY',
    counter_image: 'Images/dot.svg',
    project_info_text: ['Back End Dev', '2015'],
    project_description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['html', 'css', 'javascript'],
    live_version: 'https://github.com/elhamatokhi/portfolio-micro',
    source_code: 'https://github.com/elhamatokhi/portfolio-micro',
  },
];

const portfolio = document.querySelector('.works');

datacards.forEach((project) => {
  const ul = document.createElement('ul');
  ul.className = 'project-card';
  portfolio.appendChild(ul);

  let li = document.createElement('li');
  li.className = 'project-img-wrapper';
  li.innerHTML = `<img src=${project.project_img} alt=${project.project_title} class='Project-img'>`;
  ul.appendChild(li);

  li = document.createElement('li');
  li.className = 'project-content-block';
  ul.appendChild(li);

  const projectHeader = document.createElement('div');
  projectHeader.className = 'project-header';
  li.appendChild(projectHeader);

  const h1 = document.createElement('h1');
  h1.className = 'project-title';
  h1.innerHTML = project.project_title;
  projectHeader.appendChild(h1);

  const projectInfo = document.createElement('div');
  projectInfo.className = 'project-info';
  projectHeader.appendChild(projectInfo);

  const h2 = document.createElement('h2');
  h2.className = 'project-info-title';
  h2.innerHTML = project.project_info_title;
  projectInfo.appendChild(h2);

  project.project_info_text.forEach((infoText) => {
    const img = document.createElement('img');
    img.src = project.counter_image;
    img.alt = 'counter';
    projectInfo.appendChild(img);

    const p = document.createElement('p');
    p.className = 'project-info-item';
    p.innerHTML = infoText;
    projectInfo.appendChild(p);
  });

  const projectDescription = document.createElement('p');
  projectDescription.className = 'project-description';
  projectDescription.innerHTML = project.project_description;
  li.appendChild(projectDescription);

  const tags = document.createElement('ul');
  tags.className = 'tags';
  li.appendChild(tags);

  project.tags.forEach((tagText) => {
    const tagItem = document.createElement('li');
    tagItem.className = 'tag-item';
    tagItem.textContent = tagText;
    tags.appendChild(tagItem);
  });

  const actionContainer = document.createElement('div');
  actionContainer.className = 'action-container';
  li.appendChild(actionContainer);

  const actionButton = document.createElement('button');
  actionButton.className = 'action-btn see-project';
  actionButton.type = 'button';
  actionButton.textContent = 'See project';
  actionContainer.appendChild(actionButton);
});

const seeProjectBtn = Array.from(document.querySelectorAll('.see-project'));
const closeModalBtn = document.querySelector('.modal-close-button');
const modal = document.querySelector('.modal-container');
const body = document.querySelector('body');

seeProjectBtn.forEach((button, index) => {
  button.addEventListener('click', () => {
    modal.style.display = 'flex';
    body.style.overflow = 'hidden';
    const Data = datacards[index];
    const modalTags = Array.from(
      document.querySelectorAll('.works-modal .tag-item'),
    );

    const modalCounterImg = Array.from(
      document.querySelectorAll('.dottt'),
    );

    const infoItems = Array.from(
      document.querySelectorAll('.works-modal .project-info-item'),
    );

    document.querySelector('.works-modal .project-title').innerHTML = Data.project_title;
    document.querySelector('.works-modal .project-info-title').innerHTML = Data.project_info_title;
    document.querySelector('.works-modal .Project-img').src = Data.project_img;
    document.querySelector('.works-modal .project-description').innerHTML = Data.project_description;
    document.querySelector('.works-modal .see-live').href = Data.live_version;
    document.querySelector('.works-modal .see-source').href = Data.source_code;

    modalCounterImg.forEach((infoImg) => {
      infoImg.src = Data.counter_image;
      infoImg.alt = Data.project_title;
    });

    infoItems.forEach((infoItem, idx) => {
      infoItem.innerHTML = Data.project_info_text[idx];
    });

    modalTags.forEach((tag, idx) => {
      tag.innerHTML = Data.tags[idx];
    });

    document.querySelector('.works-modal .see-live').onclick = () => {
      window.location.href = Data.live_version;
    };

    document.querySelector('.works-modal .see-source').onclick = () => {
      window.location.href = Data.source_code;
    };
  });
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  body.style.overflow = 'auto';
});

const form = document.querySelector('.form');
const email = document.getElementById('email');
const error = document.querySelector('small');
form.addEventListener('submit', (e) => {
  const message = [];

  if (email.value !== email.value.toLowerCase()) {
    message.push('Please use lowercase for email address');
  }

  if (message.length > 0) {
    e.preventDefault();
    error.innerHTML = message.join('<br/>');
    email.style.border = '2px solid #df0000';
    email.style.borderRadius = '3px';
    email.style.backgroundColor = 'tomato';
    error.style.backgroundColor = 'red';
  }
});
