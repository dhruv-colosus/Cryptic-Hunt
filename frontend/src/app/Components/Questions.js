

export default function Questions() {
  return (
    <>
      <div className="bg-[#0b0b0b00] w-full flex flex-col justify-center items-center">
        <h1 className="flex justify-center items-start text-[#00C29A] font-Autom text-7xl m-12">Question</h1>
        <div className="bg-[#181717] w-4/5 flex justify-center items-start py-20 pr-16 pl-6">
            <div className="w-1/12 m-10 flex justify-center items-center font-Minecraftia text-4xl md:text-6xl">1.</div>
            <div className="w-10/12 flex flex-col justify-start items-center">
                <div className="text-[#00C29A] font-fira-code text-lg md:text-xl">What does the fox say? Does the fox say? The fox say? Fox say? Say? ? What does the fox say? Does the fox say? The fox say? Fox say? Say? ? What does the fox say? Does the fox say? The fox say? Fox say? Say? ? What does the fox say? Does the fox say? The fox say? Fox say? Say? ? What does the fox say? Does the fox say? The fox say? Fox say? Say? ? What does the fox say? Does the fox say? The fox say? Fox say? Say? ? What does the fox say? Does the fox say? The fox say? Fox say? Say? ? What does the fox say? Does the fox say? The fox say? Fox say? Say? ? What does the fox say? Does the fox say? The fox say? Fox say? Say? ? What does the fox say? Does the fox say? The fox say? Fox say? Say? ? What does the fox say? Does the fox say? The fox say? Fox say? Say? ? </div>
                <form className="w-full flex flex-col justify-center items-center md:flex-row md:justify-start"><input className="w-full mt-5 p-2 flex text-center font-Autom bg-[#0b0b0b00] border-4 focus:border-[#21a087] border-[#00C29A] focus-visible:outline-none focus-visible:border-5 md:w-8/12 md:mr-3 lg:w-9/12" type="text" placeholder="Answer"/><input className="w-1/2 mt-5 p-2 font-Autom bg-[#00C29A] hover:bg-[#21a087] md:w-3/12 md:ml-3 lg:w-2/12" type="submit" value="Submit" /></form>
            </div>
        </div>
      </div>
    </>
  )
}
