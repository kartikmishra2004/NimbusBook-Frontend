import React, { useState } from 'react'
import { useAuth } from "../storage/Auth";
import CreateNoteModal from './CreateNoteModal';
import dropright from "../assets/dropright.svg"

const Notes = () => {

  document.title = "NimbusBook - Notes"

  const { notesData } = useAuth()
  const { user } = useAuth()

  const [notesToggle, setNotesToggle] = useState("translate-y-[0%]");
  const [notesTitle, setNotesTitle] = useState("")
  const [notesContent, setNotesContent] = useState("Your notes will appear here.");
  const [showModel, setShowModel] = useState(false);
  const [options, setOptions] = useState("-translate-x-full");
  const [notesPreview, setNotesPreview] = useState("hidden");
  const [wellcomeMsg, setWellcomeMsg] = useState("block");

  const handleNotesToggle = () => {
    if (notesToggle === "translate-y-[-100%]") {
      setNotesToggle("translate-y-[0%]");
    } else {
      setNotesToggle("translate-y-[-100%]");
    }
  }

  const handleOpenNotes = ({ content, title }) => {
    setNotesContent(content);
    setNotesTitle(title);
  }

  const handleOpenModal = () => {
    setShowModel(true);
  }

  const closeModel = () => {
    setShowModel(false);
  }

  const handleOptionMenu = () => {
    if (options === "translate-x-0") {
      setOptions("-translate-x-full");
    }
    else {
      setOptions("translate-x-0")
    }
    setNotesPreview("block");
    setWellcomeMsg("hidden")
  }

  const handleSideMenu = () => {
    if (options === "translate-x-0") {
      setOptions("-translate-x-full");
    }
    else {
      setOptions("translate-x-0")
    }
  }

  return (
    <div className='pt-[5rem]'>
      <button data-drawer-target="cta-button-sidebar" data-drawer-toggle="cta-button-sidebar" aria-controls="cta-button-sidebar" type="button" className="inline-flex items-center mt-5 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
        <div className='flex bg-gray-200 rounded-r-md' onClick={handleSideMenu}>
          <img className='w-[35px] h-[55px]' src={dropright} alt="menu" />
        </div>
      </button>
      <aside id="cta-button-sidebar" className={`fixed pt-[5rem] top-0 left-0 z-40 w-64 h-screen border-r-2 border-gray-200 transition-all duration-500 ease-in-out ${options} sm:translate-x-0`} aria-label="Sidebar">
        <div className='w-64 sm:hidden h-max pt-3 pr-5 bg-gray-50 flex justify-center border-r-2 border-gray-200 items-center'>
          <button onClick={handleSideMenu} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-toggle="crud-modal">
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="h-full px-3 py-4 overflow-y-auto bg-zinc-50">
          <ul className="space-y-2 font-medium">
            <li>
              <div onClick={handleOpenModal} className="flex mb-3 py-3 cursor-pointer select-none items-center p-2 rounded-lg  hover:bg-indigo-100 bg-gray-200">
                <svg className="flex-shrink-0 w-5 h-5 text-indigo-500 transition duration-75" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                </svg>
                <span className="flex-1 ms-3 text-gray-600 whitespace-nowrap">Create notes</span>
              </div>
            </li>
            <li>
              <div onClick={handleNotesToggle} className="flex mb-3 py-3 cursor-pointer items-center p-2 rounded-lg  bg-gray-200 hover:bg-indigo-100">
                <svg className="flex-shrink-0 w-5 h-5 text-indigo-500 transition duration-75" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span className="flex-1 ms-3 select-none text-gray-600 h-full whitespace-nowrap">Your notes</span>
              </div>

              <div onClick={handleOptionMenu} className='overflow-hidden w-[100%] h-max'>
                <div className={`flex w-[100%] justify-center transition-all duration-500 ease-in-out py-1 overflow-hidden gap-5 relative rounded-b-xl ${notesToggle} text-gray-600 flex-col`}>
                  {notesData.map((item) => (<span onClick={() => handleOpenNotes({ content: item.content, title: item.title })} key={item._id} className='cursor-pointer bg-gray-100 hover:bg-indigo-50 rounded-lg py-2 px-4 hover:text-gray-900'>{item.title}</span>))}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </aside>
      <div className="p-4 sm:ml-64">
        <div className={`wellcome ${wellcomeMsg}`}>
          <h1 className="wellcome sm:text-5xl text-[2.5rem] leading-none font-bold text-zinc-800">Welcome to NimbusBook, <span className='text-indigo-500'>{user.fullName}</span></h1>
          <p className='text-lg mt-5 sm:w-[60vw] w-[90vw] text-zinc-600'>NimbusBook is your personal cloud-based notes app. Here, you can easily create, edit, and organize your notes. Stay productive and keep all your important information at your fingertips. Let's get started!</p>
          <h1 className="wellcome text-4xl font-bold mt-10 text-zinc-800">Steps to Create a Notes</h1>
          <p className='text-lg mt-5 leading-10 sm:w-[60vw] w-[90vw] text-zinc-600'>
            1. Click "Create Note": On the sidebar, find and click the "Create Note" button to open the note creation form. <br />
            2. Enter Note Details: Fill in the note title and content in the provided fields. <br />
            3. Save Your Note: Once you have entered all the details, click the "Save" button to save your note. <br />
            4. View Your Note: Your new note will appear in the sidebar list. Click on it to view or edit. <br />
          </p>
        </div>
        <div className={`p-4 border-2 ${notesPreview} border-gray-200 border-dashed rounded-lg h-max`}>
          <h1 className='text-4xl font-semibold text-gray-800 mb-3'>{notesTitle}</h1>
          <p className='sm:text-lg text-[1rem] text-gray-600'>{notesContent}</p>
        </div>
        {showModel && <CreateNoteModal closeModel={closeModel} />}
      </div>
    </div>
  )
}

export default Notes
