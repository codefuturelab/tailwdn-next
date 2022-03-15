import Image from 'next/image'

export default function BlockCard(props) {
    return (
      <> <card className="border-gray-500 border-2 rounded-xl w-[30rem] h-[3 rem] py-7 px-5">
    <div className="grid grid-cols-5 gap-1">
      <div className="col-span-2 ">
        <img src={props.image} width="90" height="90" />
      </div>
      <div className="col-span-3">
        <p classNameName="text-gray-700 font-bold "> {props.text} </p>
      </div>

    </div>
  </card>
      </>
    );
  }