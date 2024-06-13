const rateOfEngagementInFeed = (likes, comments, shares, range) => {
    return ((parseFloat(likes) + parseFloat(comments) + parseFloat(shares)) / parseFloat(range) * 100).toFixed(2) ;
}

const rateOfAnswersInStories = (storyAnswers, usersAchieved) => {
    return ((parseFloat(storyAnswers)/parseFloat(usersAchieved)) * 100).toFixed(2);
}

const rateAboutToLeaveInStories = (leaveStories, usersAchieved) => {
    return ((parseFloat(leaveStories)/parseFloat(usersAchieved)) * 100).toFixed(2);
}

const rateTapBack = (tapBack, usersAchieved) => {
    return ((parseFloat(tapBack)/parseFloat(usersAchieved)) * 100).toFixed(2);
}

const rateTapFoward = (tapFoward, usersAchieved) => {
    return ((parseFloat(tapFoward)/parseFloat(usersAchieved)) * 100).toFixed(2);
}

const rateOfEngagementOnReels = (likes, comments, shares, range) => {
    return (((parseFloat(likes) + parseFloat(comments) + parseFloat(shares)) / range) * 100).toFixed(2);
}

export {rateOfEngagementInFeed, rateOfAnswersInStories, rateAboutToLeaveInStories, rateTapBack, rateTapFoward, rateOfEngagementOnReels};