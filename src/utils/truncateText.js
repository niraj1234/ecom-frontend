const truncateText = (text , charLimit = 90) => {
    if(text?.length > charLimit){
        text = text.slice(0 , charLimit) + "...";
    }
    return text;
}

export default truncateText;
