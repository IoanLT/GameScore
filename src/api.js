// import axios from "axios";
import moment from "moment";

// Store the date
const today = moment().format("YYYY-MM-DD");
const prevYear = moment().subtract(1, "year").format("YYYY-MM-DD");
// const nextYear = moment().add(1, "year").format("YYYY-MM-DD");

const apiKey = process.env.REACT_APP_RAWG_API;

// Store our api endpoints
const baseURL = "https://api.rawg.io/api/";
const popularGames = `games?key=${apiKey}&dates=${prevYear},${today}&ordering=-rating&page_size=10`;

export const popularGamesURL = `${baseURL}${popularGames}`;


