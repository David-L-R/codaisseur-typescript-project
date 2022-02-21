import "./tags.css";

interface props {
  tags: string[];
  requiredTags: string[];
  setRequiredTags: (tag: string[]) => void;
}

const Tags = ({ tags, requiredTags, setRequiredTags }: props) => {
  const createTagList = (tag: string) => {
    if (requiredTags.includes(tag) && requiredTags.length > 0) {
      setRequiredTags(
        requiredTags.filter((requiredTag) => requiredTag !== tag)
      );
    } else {
      setRequiredTags([...requiredTags, tag]);
    }
  };

  return (
    <div className='tags-container'>
      {tags.map((tag) => (
        <div
          key={tag}
          className={`tag ${requiredTags.includes(tag) && "active"}`}
          onClick={() => createTagList(tag)}
        >
          {tag}
        </div>
      ))}
      <button
        onClick={() => {
          setRequiredTags([]);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Tags;
