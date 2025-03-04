const testimonialContainer = document.getElementById('Testimonials-container');

const testimonials = [
   {author: {
        name: 'Alex Mason',
        image: 'Mason.webp',    
    },

    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolorem ullam delectus deserunt debitis reiciendis esse at aut, voluptatem in soluta quidem, recusandae eveniet quo odit. Voluptatem ipsa at magnam?',
    date: '15 june',
    },
    {author: {
        name: 'War',
        image: 'codCHAR.webp',    
    },

    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolorem ullam delectus deserunt debitis reiciendis esse at aut, voluptatem in soluta quidem, recusandae eveniet quo odit. Voluptatem ipsa at magnam?',
    date: '20 july',
    },
    {author: {
        name: 'Frank Woods',
        image: 'woods.webp',    
    },

    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolorem ullam delectus deserunt debitis reiciendis esse at aut, voluptatem in soluta quidem, recusandae eveniet quo odit. Voluptatem ipsa at magnam?',
    date: '1 january',
    },
    {author: {
        name: 'Soap Mactavish',
        image: 'soap.webp',    
    },

    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolorem ullam delectus deserunt debitis reiciendis esse at aut, voluptatem in soluta quidem, recusandae eveniet quo odit. Voluptatem ipsa at magnam?',
    date: '5 may',
    }
];

const makeTestCard = (testimaonial) => {
    return `<div class="testimonial-card">
    <img src="${testimaonial.author.image}"/>
    <h2>${testimaonial.author.name}</h2>
    <p>${testimaonial.text}</p>
    <date>Written on ${testimaonial.date}</date>
    </div>`
}


let currentTestimonial = 0;

const nextTest = () => {
    if(currentTestimonial < testimonials.length - 1){
        currentTestimonial++;
        updatePage();
    }
}

const previousTest = () => {
    if(currentTestimonial > 0){
        currentTestimonial--;
        updatePage();
    }
}


const updatePage = () => {
    let markup = makeTestCard(testimonials[currentTestimonial]);

    if(testimonials.length > 1) {
        markup += `<nav>
            <button onclick="previousTest()">Prev</button>
            <button onclick="nextTest()">Next</button>
        </nav>`               
    }

    testimonialContainer.innerHTML = markup;
};

updatePage(currentTestimonial);