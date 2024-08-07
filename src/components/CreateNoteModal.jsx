import React, { useState } from 'react'
import { useAuth } from '../storage/Auth';


const CreateNoteModal = ({ closeModel }) => {

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setNote({
            ...note,
            [name]: value,
        })
    }

    const { ceateNotes } = useAuth();

    const handleCreateNotes = async (e) => {
        e.preventDefault();
        ceateNotes(note);
        closeModel();
    }

    return (
        <div id="crud-modal" tabIndex="-1" className="overflow-y-auto shadow-2xl overflow-x-hidden flex fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[100%] max-h-full backdrop-blur-sm bg-gray-500 bg-opacity-20">
            <div className="relative flex justify-center items-center p-4 max-h-full">
                <div className="relative bg-white rounded-lg sm:w-[60vw] w-[100vw] shadow">
                    <div className="flex items-center justify-between p-4 md:p-5 w-ful border-b rounded-t">
                        <h3 className="text-lg w-full font-semibold text-gray-900">
                            Create New Notes
                        </h3>
                        <button onClick={closeModel} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-toggle="crud-modal">
                            <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <form onSubmit={handleCreateNotes} className="p-4 md:p-5">
                        <div className="grid gap-4 mb-4 grid-cols-2">
                            <div className="col-span-2">
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
                                <input value={note.title} onChange={handleChange} type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Notes title" required />
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900">Content</label>
                                <textarea value={note.content} onChange={handleChange} name='content' id="content" rows="4" className="block p-2.5 w-full h-[20rem] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your notes here!!" required></textarea>
                            </div>
                        </div>
                        <button type="submit" className="text-white inline-flex items-center transition-all duration-300 ease-in-out bg-indigo-500 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Done
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateNoteModal
