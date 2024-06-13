import * as metrics from "./metrics.js";

//----------------------------------------------- FEED ENGAGEMENT -------------------------------------------------
const feedForm = document.getElementById("form-feed-engagement");
feedForm.addEventListener("submit", function (ev) {
    ev.preventDefault();

    const likes = document.getElementById("feed-likes").value;
    const comments = document.getElementById("feed-comments").value;
    const shares = document.getElementById("feed-shares").value;
    const range = document.getElementById("feed-range").value;

    const result = metrics.rateOfEngagementInFeed(likes, comments, shares, range)

    const resultFeed = document.getElementById("result-form-feed-engagement");
    resultFeed.innerHTML = `Resultado: ${result}%`;
});

const resetFeedButton = document.getElementById("redo-form-feed");
resetFeedButton.addEventListener("click", () => {
    document.getElementById("feed-likes").value = null;
    document.getElementById("feed-comments").value= null;
    document.getElementById("feed-shares").value = null;
    document.getElementById("feed-range").value= null;
    document.getElementById("result-form-feed-engagement").innerHTML = "Calcule Novamente!"
});

//----------------------------------------------- STORIES ANSWERS -------------------------------------------------
const storiesAnswersForm = document.getElementById("form-stories-answers");
storiesAnswersForm.addEventListener("submit", function(ev) {
    ev.preventDefault();

    const storyAnswers = document.getElementById("stories-answers").value;
    const usersAchieved = document.getElementById("stories-users-achieved").value;

    const result = metrics.rateOfAnswersInStories(storyAnswers, usersAchieved);

    const resultStoriesAnswers = document.getElementById("result-form-stories-answers");
    resultStoriesAnswers.innerHTML = `Resultado: ${result}%`;
})

const resetStoriesAnswersButton = document.getElementById("redo-form-stories-answers");
resetStoriesAnswersButton.addEventListener("click", () => {
    document.getElementById("stories-answers").value = null;
    document.getElementById("stories-users-achieved").value = null;
    document.getElementById("result-form-stories-answers").innerHTML = "Calcule novamente!";
})

//----------------------------------------------- EXIT STORIES -------------------------------------------------
const exitsStoriesForm = document.getElementById("form-exits-stories");
exitsStoriesForm.addEventListener("submit", (ev) => {
    ev.preventDefault();

    const exits = document.getElementById("exits-stories").value;
    const usersAchieved = document.getElementById("exits-stories-users-achieved").value;

    const result = metrics.rateAboutToLeaveInStories(exits,usersAchieved);

    const resultExitsStories = document.getElementById("result-form-exits-stories");
    resultExitsStories.innerHTML = `Resultado: ${result}%`;
});

const resetExitsStoriesButton = document.getElementById("redo-form-exits-stories");
resetExitsStoriesButton.addEventListener("click", () => {
    document.getElementById("exits-stories").value = null;
    document.getElementById("exits-stories-users-achieved").value = null;
    document.getElementById("result-form-exits-stories").innerHTML = "Calcule novamente!";
})

//----------------------------------------------- TAP-BACK -------------------------------------------------
const tapbackForm = document.getElementById("form-tapback");
tapbackForm.addEventListener("submit", (ev) => {
    ev.preventDefault();

    const tapback = document.getElementById("tapback").value;
    const usersAchieved = document.getElementById("tapback-users-achieved").value;

    const result = metrics.rateTapBack(tapback, usersAchieved);

    const resultTapback = document.getElementById("result-form-tapback");
    resultTapback.innerHTML = `Resultado: ${result}%`;
});

const resetTapbackButton = document.getElementById("redo-form-tapback");
resetTapbackButton.addEventListener("click", () => {
    document.getElementById("tapback").value = null;
    document.getElementById("tapback-users-achieved").value = null;
    document.getElementById("result-form-tapback").innerHTML = "Calcule novamente!";
})

//----------------------------------------------- TAP-FOWARD -------------------------------------------------
const tapfowardForm = document.getElementById("form-tapfoward");
tapfowardForm.addEventListener("submit", (ev) => {
    ev.preventDefault();

    const tapfoward = document.getElementById("tapfoward").value;
    const usersAchieved = document.getElementById("tapfoward-users-achieved").value;

    const result = metrics.rateTapBack(tapfoward, usersAchieved);

    const resultTapfoward = document.getElementById("result-form-tapfoward");
    resultTapfoward.innerHTML = `Resultado: ${result}%`;
});

const resetTapfowardButton = document.getElementById("redo-form-tapfoward");
resetTapfowardButton.addEventListener("click", () => {
    document.getElementById("tapfoward").value = null;
    document.getElementById("tapfoward-users-achieved").value = null;
    document.getElementById("result-form-tapfoward").innerHTML = "Calcule novamente!";
})

//----------------------------------------------- REELS ENGAGEMENT -------------------------------------------------
const reelsForm = document.getElementById("form-reels-engagement");
reelsForm.addEventListener("submit", function (ev) {
    ev.preventDefault();

    const likes = document.getElementById("reels-likes").value;
    const comments = document.getElementById("reels-comments").value;
    const shares = document.getElementById("reels-shares").value;
    const range = document.getElementById("reels-range").value;

    const result = metrics.rateOfEngagementOnReels(likes, comments, shares, range);

    const resultReels = document.getElementById("result-form-reels-engagement");
    resultReels.innerHTML = `Resultado: ${result}%`;
});

const resetReelsButton = document.getElementById("redo-form-reels");
resetReelsButton.addEventListener("click", () => {
    document.getElementById("reels-likes").value = null;
    document.getElementById("reels-comments").value= null;
    document.getElementById("reels-shares").value = null;
    document.getElementById("reels-range").value= null;
    document.getElementById("result-form-reels-engagement").innerHTML = "Calcule Novamente!"
});