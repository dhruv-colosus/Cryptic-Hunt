

const Message_box = (props) => {
  return (
    <div className={" absolute z-3 top-0 m-4 bg-background border-3 border-main max-w-max w-[50%] p-3 flex flex-col transition-all duration-1000" + props.show}>
      <div className=" font-heading w-full text-main text-center pb-4">
        !Message!
      </div>

      <div className=" font-heading w-full justify-start text-main break-words">
        I am batman, the city needs me
      </div>
    </div>
  );
};

export default Message_box;
