import React, {useEffect} from 'react'
import { FormSectionTopWrapper, NotesContainer, NotesSectionHeaderItem, NotesWrapper } from '../StyledElements/DashboardStyledElemets';
import NetworkRoute from '../Utils/Network';

export const NotesSection = {
    View: "View All",
    Add: "Add a Note"
}

const Notes = ({selectedNoteSection, setSelectedNoteSection, notes, setIsLoading}) => {

    const handleSelection = (item) => {
        setSelectedNoteSection(item)
    }

    useEffect(() => {
      console.log(notes)

      notes.forEach(note_id => {
        var url = NetworkRoute.base + NetworkRoute.dashboard + "/" + NetworkRoute.notes + "/" +  note_id
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
             setIsLoading(false)
             console.log(data)
            })
            .catch((error) => {
            console.error(error);
            setIsLoading(false)
            });

      })



    }, [])
    
  return (
    <NotesContainer>
        <FormSectionTopWrapper>
            <NotesSectionHeaderItem onClick={() => handleSelection(NotesSection.View)} isSelected={selectedNoteSection === NotesSection.View}>{NotesSection.View}</NotesSectionHeaderItem>
            <NotesSectionHeaderItem onClick={() => handleSelection(NotesSection.Add)} isSelected={selectedNoteSection === NotesSection.Add}>{NotesSection.Add}</NotesSectionHeaderItem>
        </FormSectionTopWrapper>

        <NotesWrapper>

        {(() => {

            switch (selectedNoteSection) {
                case NotesSection.View:
                        return (
                            <>
                            {
                                notes != null &&
                                notes.forEach(element => {
                                    return  <p>{element}</p>
                                })
                            }
                            </>
                        );
                    

                case NotesSection.Add:
                    return (
                        <>
                        {


                        }
                        </>
                        );


            }

})()}

        </NotesWrapper>
       

       

    </NotesContainer>
  )
}

export default Notes;
