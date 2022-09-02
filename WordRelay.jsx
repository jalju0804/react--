const React = require('react');
const { useState,useRef } = React;

const WordRelay = ()=>
{
    const [word,setWord] = useState("잘주");
    const [value,setValue] = useState("");
    const [result,setResult] = useState("");
    const inputRef = useRef(null);

    const onSubnitForm = (e) =>{
        e.preventDefault();
        if(word[word.length -1] === value[0]){
            setResult('딩동댕');
            setWord(value);
            setValue("");
            inputRef.current.focus();
        } else {
            setResult("땡");
            setValue("");
           inputRef.current.focus();
        }
    };

    const onChangeInput = (e) =>{
        setValue(e.target.value);
    };
        return (
            <>
            <div>{word}</div>
            <label htmlFor="wordInput">글자를 입력하세요</label>
            <form onSubmit = {onSubnitForm}>
                <input ref = {inputRef} value = {value} onChange={onChangeInput}/>
                <button>입력!</button>
            </form>
            <div>{result}</div>
            </>
        )
    
}

module.exports = WordRelay;