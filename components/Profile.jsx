
import PromptCard from './PromptCard';

const Profile = ({name, desc, data, handleEdit, handleDelete}) => {
  return (
    <section className='w-full'>
      <span className='blue_gradient'>
        <h1 className='head_text text_left'> {name} Profile</h1>
      </span> 
      <p className='desc text-left'> {desc} </p>
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleDelete={() => handleDelete && handleDelete(post)}
          handleEdit={() => handleEdit && handleEdit(post)}
        />
      ))}

    </section>
  )

}

export default Profile