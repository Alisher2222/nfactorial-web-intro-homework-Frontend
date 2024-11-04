import "./styles/Cards.css";
import Card from "./Card.jsx"
function Cards(){
    const postArray = [
        {
            name: "Jane Smith",
            topic: "JavaScript Basics",
            date: "2023-04-15",
            title: "Introduction to JavaScript",
            text: "JavaScript is a versatile programming language that enables interactive web pages. This article covers the basics...",
            category: "Programming"
        },
        {
            name: "John Doe",
            topic: "Frontend Development",
            date: "2023-05-22",
            title: "Understanding Flexbox",
            text: "Flexbox is a CSS layout model that makes it easier to design responsive layouts. This guide explores Flexbox properties...",
            category: "Web Development"
        },
        {
            name: "Alice Johnson",
            topic: "Personal Finance",
            date: "2023-06-10",
            title: "Saving Money in College",
            text: "College expenses can be overwhelming. Here are some strategies to save money while still enjoying college life...",
            category: "Finance"
        }
    ];
    return(
        <div className = "cards"><Card postArray = {postArray}></Card></div>
    );
}
export default Cards;