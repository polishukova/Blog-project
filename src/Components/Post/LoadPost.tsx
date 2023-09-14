import { useState } from "react"
import { sendPost } from "./getPosts"
import './LoadPost.css'
import { useFileSelect } from "../UseFileSelect"

export const LoadPost = () => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [lesson_num, setLesson_num] = useState('')
    const [text, setText] = useState('')

    const { onFileSelect, preview, selectedFile } = useFileSelect()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        selectedFile && formData.append('image', selectedFile);
        formData.append('description', desc);
        formData.append('lesson_num', lesson_num);
        formData.append('text', text)
        sendPost(formData)
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <label> Title
                <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}></input>
            </label>
            <label>Image
                <input type='file' onChange={onFileSelect}></input>
            </label>
            <label>Description
                <input type='text' value={desc} onChange={(e) => setDesc(e.target.value)}></input>
            </label>
            <label>Lesson Number
                <input type='number' value={lesson_num} onChange={(e) => setLesson_num(e.target.value)}></input>
            </label>
            <label> Text
                <input type='text' value={text} onChange={(e) => setText(e.target.value)}></input>
            </label>
            <img src={preview}/>
            <button>Submit</button>
        </form>
    )
}