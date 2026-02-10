import React, { useState } from 'react'
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";


export default function AddNewService() {
  const [available, setAvailable] = useState(true);
  const [addedServices, setAddedServices] = useState([]);

  const [selectedDay, setSelectedDay] = useState("Sunday");
  const [startTime, setStartTime] = useState("10:00");
  const [endTime, setEndTime] = useState("18:00");
  const [scheduleSlots, setScheduleSlots] = useState([]);

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const handleAddSchedule = () => {
    const formatTime = (timeStr) => {
      const [hours, minutes] = timeStr.split(':');
      const h = parseInt(hours);
      const ampm = h >= 12 ? 'PM' : 'AM';
      const hours12 = h % 12 || 12;
      return `${hours12}:${minutes} ${ampm}`;
    };

    const newSlot = {
      day: selectedDay,
      time: `${formatTime(startTime)} - ${formatTime(endTime)}`,
    };
    
    const newSlots = [...scheduleSlots, newSlot];
    setScheduleSlots(newSlots);

    const timingsSummary = newSlots.map(s => `${s.day} (${s.time})`).join(', ');
    setAddedServices([
      {
        name: "Service Name", 
        price: "100 Le",
        commission: "10%",
        timings: timingsSummary
      }
    ]);
  };

  return (
    <div className='p-8 m-5 bg-white shadow-lg relative h-auto' style={{ width: "98%" }}>
      <div className='flex flex-wrap gap-5'>
        <div style={{ width: "32%" }}>
          <label for="category" class="block mb-2.5 text-sm font-medium text-heading">Select Category <span className='text-red-500 font-lg text-lg'>*</span></label>
          <select id="category" class="block w-full px-3 py-2 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded focus:ring-brand focus:border-brand shadow-xs placeholder:text-body">
            <option selected>Select Category</option>
            <option value="c1">Category 1</option>
            <option value="c2">Category 2</option>
            <option value="c3">Category 3</option>
            <option value="c4">Category 4</option>
          </select>
        </div>
        <div style={{ width: "32%" }}>
          <label for="sub-category" class="block mb-2.5 text-sm font-medium text-heading">Select Sub-Category <span className='text-red-500 font-lg text-lg'>*</span></label>
          <select id="sub-category" class="block w-full px-3 py-2 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded focus:ring-brand focus:border-brand shadow-xs placeholder:text-body">
            <option selected>Select Sub-Category</option>
            <option value="c1">Category 1</option>
            <option value="c2">Category 2</option>
            <option value="c3">Category 3</option>
            <option value="c4">Category 4</option>
          </select>
        </div>
        <div style={{ width: "32%" }}>
          <label for="service" class="block mb-2.5 text-sm font-medium text-heading">Service <span className='text-red-500 font-lg text-lg'>*</span></label>
          <select id="service" class="block w-full px-3 py-2 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded focus:ring-brand focus:border-brand shadow-xs placeholder:text-body">
            <option selected>Select Service</option>
            <option value="s1">Service 1</option>
            <option value="s2">Service 2</option>
            <option value="s3">Service 3</option>
            <option value="s4">Service 4</option>
          </select>
        </div>
        <div style={{ width: "32%" }}>
          <label for="com-value" class="block mb-2.5 text-sm font-medium text-heading">Commission Value</label>
          <input type="text" id="com-value" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded focus:ring-brand focus:border-brand block w-full px-3 py-2 shadow-xs placeholder:text-body" placeholder="Commission value" required />
        </div>
        <div style={{ width: "32%" }} className='-mt-2'>
          <label for="pricing-type" class="block mb-2.5 text-sm font-medium text-heading">Pricing Type <span className='text-red-500 font-lg text-lg'>*</span></label>
          <select id="pricing-type" class="block w-full px-3 py-2 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded focus:ring-brand focus:border-brand shadow-xs placeholder:text-body">
            <option selected>Pricing Type</option>
            <option value="t1">Type 1</option>
            <option value="t2">Type 2</option>
            <option value="t3">Type 3</option>
            <option value="t4">Type 4</option>
          </select>
        </div>
        <div style={{ width: "32%" }} className='-mt-2.5'>
          <label for="price" class="block mb-2.5 text-sm font-medium text-heading">Price <span className='text-red-500 font-lg text-lg'>*</span></label>
          <input type="number" id="price" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Price" required />
        </div>
        <div style={{ width: "32%" }} className='-mt-3'>
          <label for="state" class="block mb-2.5 text-sm font-medium text-heading">State <span className='text-red-500 font-lg text-lg'>*</span></label>
          <select id="state" class="block w-full px-3 py-2 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded focus:ring-brand focus:border-brand shadow-xs placeholder:text-body">
            <option selected>State</option>
            <option value="a">Active</option>
            <option value="n">Non active</option>
          </select>
        </div>
        <div style={{ width: "65%" }} className='-mt-3.5'>
          <label for="image" class="block mb-2.5 text-sm font-medium text-heading">Service Image <span className='text-red-500 font-lg text-lg'>*</span></label>
          <div className='border border-default-medium rounded flex'>
            <input className="cursor-pointer bg-neutral-secondary-medium border border-default-medium border-black text-heading text-sm rounded-s focus:ring-brand focus:border-brand block w-full shadow-xs placeholder:text-body" id="image" type="file" accept="image/*" />
            <button className='px-4 py-2 bg-sky-950 text-white rounded-e'>Upload</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-3 my-3">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={available}
            onChange={() => setAvailable(!available)}
          />
          <div className="w-9 h-5 bg-gray-300 rounded-full peer peer-checked:bg-green-600
          after:content-[''] after:absolute after:top-[2px] after:left-[2px]
          after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all
          peer-checked:after:translate-x-full">
          </div>
          <span className="ml-3 text-sm font-medium text-heading">
            Always Available
          </span>
        </label>

        {!available && (
          <div className="mt-8">
             <div className='flex flex-wrap items-end gap-5 mb-8'>
                <div style={{ width: "20%" }}>
                  <label class="block mb-2 text-sm font-medium text-heading">Select Day</label>
                  <select 
                    value={selectedDay}
                    onChange={(e) => setSelectedDay(e.target.value)}
                    className="block w-full px-3 py-2 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded focus:ring-brand focus:border-brand shadow-xs"
                  >
                    {days.map(day => <option key={day} value={day}>{day}</option>)}
                  </select>
                </div>
                <div style={{ width: "30%" }}>
                  <label class="block mb-2 text-sm font-medium text-heading">From  <span style={{marginLeft:"150px"}}>To</span></label>
                  <div className="flex items-center gap-2">
                    <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} className="block w-full px-3 py-1.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded" />
                    <span>-</span>
                    <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} className="block w-full px-3 py-1.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded" />
                  </div>
                </div>
                <button onClick={handleAddSchedule} className='px-10 py-2 bg-green-600 text-white rounded font-bold uppercase text-sm'>Add</button>
             </div>

             <div className='grid grid-cols-7 gap-4 mb-10'>
                {scheduleSlots.map((item, index) => (
                  <div key={index} className="aspect-square flex flex-col items-center justify-center rounded border bg-[#dedede] border-gray-400 text-black font-bold text-center p-2" style={{ backgroundSize: '4px 4px' }}>
                    <span className="text-sm">{item.day}</span>
                    <span className="text-[10px] mt-2 opacity-80">{item.time}</span>
                  </div>
                ))}
             </div>

             <div className='flex flex-wrap gap-5 mb-10'>
                {addedServices.map((service, index) => (
                  <div key={index} className='bg-[#dedede] p-5 rounded min-w-[280px] shadow-sm relative'>
                    <div className='absolute top-4 right-4 flex gap-3'>
                      <button><i className="fa-solid fa-pen text-sm"></i></button>
                      <button><i className="fa-solid fa-trash-can text-sm"></i></button>
                    </div>
                    <div className='text-sm space-y-1'>
                      <p><span className='opacity-70'>Service Name: </span><span className='font-bold'>{service.name}</span></p>
                      <p><span className='opacity-70'>Price: </span><span className='font-bold'>{service.price}</span></p>
                      <p><span className='opacity-70'>company comission : </span><span className='font-bold'>{service.commission}</span></p>
                    </div>
                  </div>
                ))}
              </div>
          </div>
        )}
      </div>

      <div>
        <label for="desc" class="block mb-2.5 text-sm font-medium text-heading">Description</label>
        <textarea id="desc" rows="2" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body" placeholder="Description"></textarea>
      </div>
      <div className='mt-3' style={{marginBottom: "70px"}}>
        <label for="image" class="block mb-2.5 text-sm font-medium text-heading">Service Gallery</label>
        <div className='border border-default-medium rounded flex'>
          <input className="cursor-pointer p-1 bg-neutral-secondary-medium border border-default-medium border-black text-heading text-sm rounded-s focus:ring-brand focus:border-brand block w-full shadow-xs placeholder:text-body" id="image" type="file" accept="image/*" />
          <button className='px-5 py-2 bg-sky-950 text-white rounded-e'>Upload</button>
        </div>
      </div>

      <button className='rounded px-6 py-2 bg-green-600 text-white absolute bottom-0 right-0 m-5'>Save</button>
    </div>
  )
}
