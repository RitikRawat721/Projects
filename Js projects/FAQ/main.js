const dataArray = [
    {
        title:' Why is JavaScript cool?',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim tempore rerum id hic, fugit, veritatis saepe non nesciunt aspernatur sunt, sequi sapiente mollitia quae. Modi consequatur dolorem asperiores iusto et.'
    },
    {
        title:' What is JS?',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim tempore rerum id hic, fugit, veritatis saepe non nesciunt aspernatur sunt, sequi sapiente mollitia quae. Modi consequatur dolorem asperiores iusto et.'
    },
    {
        title:' How Can I use JS?',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim tempore rerum id hic, fugit, veritatis saepe non nesciunt aspernatur sunt, sequi sapiente mollitia quae. Modi consequatur dolorem asperiores iusto et.'
    },
    
];

const makeHTML = data => {
    return `<details>
        <summary>${data.title}</summary>
        <p>${data.detail}</p>
    </details>`;
};

const faqContainer = document.getElementById('FAQ-container')

faqContainer.innerHTML = dataArray.map((d, i) => makeHTML(d)).join('')
