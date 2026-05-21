import config from './config';
export async function HomePageContent() {
    const { REACT_APP_API_URL } = config();
    const response = await fetch(REACT_APP_API_URL + '/front/get-home-page-content');
    const data = await response.json();
    return data;
}
export async function SettingsContent() {
    const { REACT_APP_API_URL } = config();
    const response = await fetch(REACT_APP_API_URL + '/front/get-header-content');
    const data = await response.json();
    return data;
}
export async function AboutPageContent() {
    const { REACT_APP_API_URL } = config();
    const response = await fetch(REACT_APP_API_URL + '/front/get-about-content');
    const data = await response.json();
    return data;
}
export async function HowWeWorkContent() {
    const { REACT_APP_API_URL } = config();
    const response = await fetch(REACT_APP_API_URL + '/front/get-how-we-work-content');
    const data = await response.json();
    return data;
}
export async function PortfoloContent() {
    const { REACT_APP_API_URL } = config();
    const response = await fetch(REACT_APP_API_URL + '/front/get-portfolio-content');
    const data = await response.json();
    return data;
}

export async function ServiceContent(slug) {
    const { REACT_APP_API_URL } = config();
    const response = await fetch(REACT_APP_API_URL + `/front/service-details/${slug}`);
    const data = await response.json();
    return data;
}

export async function IndustryContent(slug) {
    const { REACT_APP_API_URL } = config();
    const response = await fetch(REACT_APP_API_URL + `/front/industry-details/${slug}`);
    const data = await response.json();
    return data;
}

export async function PortfolioDetails(slug) {
    const { REACT_APP_API_URL } = config();
    const response = await fetch(REACT_APP_API_URL + `/front/get-portfolio-details/${slug}`);
    const data = await response.json();
    return data;
}
export async function TestimonialContent(page) {
    const { REACT_APP_API_URL } = config();
    const response = await fetch(REACT_APP_API_URL + `/front/get-testimonial-content?page=${page}`);
    const data = await response.json();
    return data;
}
export async function getCareerContent() {
    const { REACT_APP_API_URL } = config();
    const response = await fetch(REACT_APP_API_URL + `/front/get-career-content`);
    const data = await response.json();
    return data;
}
export async function getCareerContentById(id) {
    const { REACT_APP_API_URL } = config();
    const response = await fetch(REACT_APP_API_URL + `/front/get-career-category-content-by-id/${id}`);
    const data = await response.json();
    return data;
}
export async function getCareerCategoryContent() {
    const { REACT_APP_API_URL } = config();
    const response = await fetch(REACT_APP_API_URL + `/front/get-career-category-content`);

    const data = await response.json();
    return data;
}
export async function getBlogList(page) {
    const { REACT_APP_API_URL } = config();
    const response = await fetch(REACT_APP_API_URL + `/front/get-blog-content?page=${page}`);
    const data = await response.json();
    return data;
}
export async function getBlogDetails(slug) {
    const { REACT_APP_API_URL } = config();
    const response = await fetch(REACT_APP_API_URL + `/front/get-blog-details/${slug}`);
    const data = await response.json();
    return data;
}
export async function sendContactData(data) {
    const { REACT_APP_API_URL } = config();
    const response = await fetch(REACT_APP_API_URL + `/front/add-contact`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.json();
}

export async function sendStartProjectData(data) {
    const { REACT_APP_API_URL } = config();
    const response = await fetch(REACT_APP_API_URL + `/front/add-start-project`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.json();
}
export async function sendCareerFormData(data) {
    const { REACT_APP_API_URL } = config();
    const response = await fetch(REACT_APP_API_URL + `/front/add-career-form`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.json();
}
//`/add-contact`, data

///get-blog-details/${slug}
//`/get-blog-content?page=${page}`
///get-career-content
//`/get-testimonial-content?page=${page}
//`/get-portfolio-details/${slug}`
//`/industry-details/${slug}`
