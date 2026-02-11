import React, { useState } from 'react'
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";


export default function AddNewService() {

  const [ServiceImage, setServiceImage] = useState("Browser");

  const [available, setAvailable] = useState(true);
  const [addedServices, setAddedServices] = useState([]);

  const [serviceName, setServiceName] = useState("");
  const [commission, setCommission] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [pricingType, setPricingType] = useState("");
  const [state, setState] = useState("");
  const [description, setDescription] = useState("");

  const [selectedDay, setSelectedDay] = useState("Sunday");

  const [startTime, setStartTime] = useState("10:00");
  const [endTime, setEndTime] = useState("18:00");
  const [scheduleSlots, setScheduleSlots] = useState([]);

  const [serviceGallery, setServiceGallery] = useState([]);


  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const handleAddSchedule = () => {
    const formatTime = (timeStr) => {
      if (!timeStr) return "";
      const [hours, minutes] = timeStr.split(':');
      let h = parseInt(hours);
      const ampm = h >= 12 ? 'PM' : 'AM';
      h = h % 12 || 12;
      return `${h}:${minutes} ${ampm}`;
    };

    const newTime = `${formatTime(startTime)} - ${formatTime(endTime)}`;

    let newSlots;
    const existingIndex = scheduleSlots.findIndex(s => s.day === selectedDay);
    if (existingIndex > -1) {
      newSlots = [...scheduleSlots];
      newSlots[existingIndex] = { ...newSlots[existingIndex], time: newTime };
    } else {
      newSlots = [...scheduleSlots, { day: selectedDay, time: newTime }];
    }
    
    setScheduleSlots(newSlots);

    const timingsSummary = newSlots
      .sort((a,b) => days.indexOf(a.day) - days.indexOf(b.day))
      .map(s => `${s.day} (${s.time})`).join(', ');

    const newService = {
      name: serviceName || "Select Service",
      price: price ? `${price} Le` : "0 Le",
      commission: commission ? `${commission}%` : "0%",
      timings: timingsSummary,
      category: category,
      subCategory: subCategory
    };

    setAddedServices([newService]);
  };

  return (

    <>
      <div className="p-5 flex justify-between">
        <div className="text-xl font-bold text-sky-900">Add New Service</div>

      </div>


      <div className='p-8 m-5 bg-white shadow-lg relative h-auto' style={{ width: "98%" }}>
        <div className='flex flex-wrap gap-5'>
          <div style={{ width: "32%" }}>
            <label htmlFor="category" className="block mb-2.5 text-sm font-medium text-heading">Select Category <span className='text-red-500 font-lg text-lg'>*</span></label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="block w-full px-3 py-2 bg-neutral-secondary-medium border border-default-medium border-gray-300 text-heading text-sm rounded focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
            >
              <option value="">Select Category</option>
              <option value="c1">Category 1</option>
              <option value="c2">Category 2</option>
              <option value="c3">Category 3</option>
              <option value="c4">Category 4</option>
            </select>
          </div>

          <div style={{ width: "32%" }}>
            <label htmlFor="sub-category" className="block mb-2.5 text-sm font-medium text-heading">Select Sub-Category <span className='text-red-500 font-lg text-lg'>*</span></label>
            <select
              id="sub-category"
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
              className="block w-full px-3 py-2 bg-neutral-secondary-medium border border-default-medium border-gray-300 text-heading text-sm rounded focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
            >
              <option value="">Select Sub-Category</option>
              <option value="c1">Category 1</option>
              <option value="c2">Category 2</option>
              <option value="c3">Category 3</option>
              <option value="c4">Category 4</option>
            </select>
          </div>

          <div style={{ width: "32%" }}>
            <label htmlFor="service" className="block mb-2.5 text-sm font-medium text-heading">Service <span className='text-red-500 font-lg text-lg'>*</span></label>
            <select
              id="service"
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
              className="block w-full px-3 py-2 bg-neutral-secondary-medium border border-default-medium border-gray-300 text-heading text-sm rounded focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
            >
              <option value="">Select Service</option>
              <option value="s1">Service 1</option>
              <option value="s2">Service 2</option>
              <option value="s3">Service 3</option>
              <option value="s4">Service 4</option>
            </select>
          </div>

          <div style={{ width: "32%" }}>
            <label htmlFor="com-value" className="block mb-2.5 text-sm font-medium text-heading">Commission Value</label>
            <input
              type="text"
              id="com-value"
              value={commission}
              disabled={!category || !subCategory || !serviceName}
              onChange={(e) => setCommission(e.target.value)}
              className="disabled:bg-gray-200 border border-default-medium border-gray-300 text-heading text-sm rounded focus:ring-brand focus:border-brand block w-full px-3 py-2 shadow-xs placeholder:text-body"
              placeholder="Commission value"
              required
            />
          </div>

          <div style={{ width: "32%" }} className='-mt-2'>
            <label htmlFor="pricing-type" className="block mb-2.5 text-sm font-medium text-heading">Pricing Type <span className='text-red-500 font-lg text-lg'>*</span></label>
            <select
              id="pricing-type"
              value={pricingType}
              onChange={(e) => setPricingType(e.target.value)}
              className="block w-full px-3 py-2 bg-neutral-secondary-medium border border-default-medium border-gray-300 text-heading text-sm rounded focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
            >
              <option value="">Pricing Type</option>
              <option value="t1">Type 1</option>
              <option value="t2">Type 2</option>
              <option value="t3">Type 3</option>
              <option value="t4">Type 4</option>
            </select>
          </div>

          <div style={{ width: "32%" }} className='-mt-2.5'>
            <label htmlFor="price" className="block mb-2.5 text-sm font-medium text-heading">Price <span className='text-red-500 font-lg text-lg'>*</span></label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="bg-neutral-secondary-medium border border-default-medium border-gray-300 text-heading text-sm rounded focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
              placeholder="Price"
              required
            />
          </div>

          <div style={{ width: "32%" }} className='-mt-3'>
            <label htmlFor="state" className="block mb-2.5 text-sm font-medium text-heading">State <span className='text-red-500 font-lg text-lg'>*</span></label>
            <select
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="block w-full px-3 py-2 bg-neutral-secondary-medium border border-default-medium border-gray-300 text-heading text-sm rounded focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
            >
              <option value="">State</option>
              <option value="a">Active</option>
              <option value="n">Non active</option>
            </select>
          </div>

          <div style={{ width: "65%" }} className="-mt-3.5">
            <label className="block mb-2.5 text-sm font-medium text-heading">
              Service Image <span className="text-red-500 text-lg">*</span>
            </label>

            <div className="border border-default-medium rounded flex items-center">

              <span className="px-3 text-sm text-body flex-1 truncate">
                {ServiceImage}
              </span>

              <input
                type="file"
                id="image"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files.length > 0) {
                    setServiceImage(e.target.files[0].name);
                  }
                }}
              />


              <label
                htmlFor="image"
                className="px-4 py-2 bg-sky-900 hover:bg-brand-primary/90 text-white cursor-pointer rounded-e"
              >
                Upload
              </label>
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
            <div className="w-9 h-5 bg-gray-300 rounded-full peer peer-checked:bg-green-700
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
              <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-10'>
                {days.map((day) => {
                  const slot = scheduleSlots.find(s => s.day === day);
                  const isSelected = selectedDay === day;
                  return (
                    <div
                      key={day}
                      onClick={() => setSelectedDay(day)}
                      className={`cursor-pointer aspect-square flex flex-col items-center justify-center rounded-lg border transition-all duration-200 ${
                        isSelected 
                          ? 'border-sky-900 bg-sky-50 ring-2 ring-sky-900 shadow-sm' 
                          : slot 
                            ? 'border-sky-300 bg-sky-50/50' 
                            : 'border-gray-200 bg-white hover:border-sky-200'
                      } text-center p-3`}
                    >
                      <span className={`text-sm font-bold block mb-1 ${isSelected || slot ? 'text-sky-900' : 'text-gray-500'}`}>{day}</span>
                      {slot ? (
                        <span className="text-[11px] font-semibold text-sky-800 bg-sky-100 px-2 py-0.5 rounded-full">
                          {slot.time}
                        </span>
                      ) : (
                        <span className="text-[10px] text-gray-400">Off</span>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className='flex flex-col md:flex-row md:items-end gap-6 mb-10 bg-gray-50/50 p-6 rounded-xl border border-gray-100'>
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase text-sky-900 mb-3 tracking-wider">Set availability for {selectedDay}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <label className="block text-[10px] text-gray-500 mb-1 uppercase font-bold">From</label>
                      <input 
                        type="time" 
                        value={startTime} 
                        onChange={(e) => setStartTime(e.target.value)} 
                        className="block w-full px-4 py-2.5 bg-white border border-gray-200 text-sky-900 text-sm rounded-lg focus:ring-2 focus:ring-sky-900 focus:border-sky-900 transition-all outline-none" 
                      />
                    </div>
                    <div className="h-0.5 w-4 bg-gray-300 self-end mb-5"></div>
                    <div className="flex-1">
                      <label className="block text-[10px] text-gray-500 mb-1 uppercase font-bold">To</label>
                      <input 
                        type="time" 
                        value={endTime} 
                        onChange={(e) => setEndTime(e.target.value)} 
                        className="block w-full px-4 py-2.5 bg-white border border-gray-200 text-sky-900 text-sm rounded-lg focus:ring-2 focus:ring-sky-900 focus:border-sky-900 transition-all outline-none" 
                      />
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={handleAddSchedule} 
                  className='px-12 py-3 bg-sky-900 hover:bg-brand-primary/90 text-white rounded font-bold uppercase text-sm transition-all shadow-md active:scale-95'
                >
                  Add
                </button>
              </div>

              <div className='flex flex-wrap gap-5 mb-10'>
                {addedServices.map((service, index) => (
                  <div key={index} className='bg-sky-50 p-6 rounded-xl border border-sky-100 min-w-[320px] shadow-sm relative group'>
                    <div className='absolute top-5 right-5 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity'>
                      <button className="p-1.5 bg-white rounded-full shadow-sm hover:text-sky-900 transition-colors"><i className="fa-solid fa-pen text-xs"></i></button>
                      <button className="p-1.5 bg-white rounded-full shadow-sm hover:text-red-600 transition-colors" onClick={() => {
                        setAddedServices([]);
                        setScheduleSlots([]);
                      }}><i className="fa-solid fa-trash-can text-xs"></i></button>
                    </div>
                    <div className='space-y-2'>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-sky-600"></div>
                        <h4 className="font-bold text-sky-900">{service.name}</h4>
                      </div>
                      <div className='grid grid-cols-2 gap-x-4 gap-y-1 text-sm font-medium text-sky-900/80'>
                        <p><span className='opacity-60'>Price: </span><span className='font-bold'>{service.price}</span></p>
                        <p><span className='opacity-60'>Commission: </span><span className='font-bold'>{service.commission}</span></p>
                      </div>
                      <div className="pt-2 border-t border-sky-200/50 mt-2">
                         <p className="text-[10px] uppercase font-bold opacity-60 mb-1">Schedule</p>
                         <p className="text-xs font-semibold leading-relaxed">{service.timings}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}
        </div>

        <div>
          <label for="desc" class="block mb-2.5 text-sm font-medium text-heading">Description</label>
          <textarea id="desc" value={description} onChange={(e) => setDescription(e.target.value)} rows="2" class="bg-neutral-secondary-medium border border-default-medium border-gray-300 text-heading text-sm rounded focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body" placeholder="Description"></textarea>
        </div>


        <div className='mt-5' style={{marginBottom:"70px"}}>
          <label for="desc" class="block mb-2.5 text-sm font-medium text-heading">Service Gallery</label>
          <div className="border border-default-medium rounded flex items-center">
          <span className="px-3 text-sm text-body flex-1 truncate">
            {serviceGallery.length > 0
              ? `${serviceGallery.length} images selected`
              : "No images selected"}
          </span>

          <input
            type="file"
            id="gallery"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => setServiceGallery([...e.target.files])}
          />

          <label
            htmlFor="gallery"
            className="px-4 py-2 bg-sky-900 hover:bg-brand-primary/90 text-white cursor-pointer rounded-e"
          >
            Upload
          </label>
        </div>
        </div>


        <button className='rounded px-6 py-2 bg-sky-900 hover:bg-brand-primary/90 disabled:opacity-50  text-white absolute bottom-0 right-0 mb-5 me-8'
        disabled={!category || !subCategory || !serviceName || !commission || !pricingType || !price || !state || !serviceGallery || !description || !serviceGallery}
        ><i class="fa-solid fa-floppy-disk"></i> Save</button>
      </div>
    </>
  )
}
