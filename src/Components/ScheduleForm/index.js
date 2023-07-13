import React from 'react'
import { useForm, Controller } from "react-hook-form"
function ScheduleForm() {
    const defaultValues = {
        firstname: '',
        lastname: '',
        email: '',
        phoneNumber: '',
        typeofAppointment: ''
    }
    const {
        control,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({ defaultValues })
    const submit = (e) => {
        alert('form submitted');
        reset();
    }
    return (
        <div className='w-full bg-primary flex flex-col justify-center p-5'>
            <div className='text-white text-3xl font-semibold w-8/12 m-auto text-center'>
                Schedule an Appointment
            </div>
            <div className='text-white  w-10/12 m-auto text-center p-2'>
                Here, let visitors know what will happen when they complete your form
            </div>
            <div className='w-10/12 m-auto'>
                <form onSubmit={handleSubmit(submit)}>
                    <div className='py-2'>
                        <Controller
                            name='firstname'
                            control={control}
                            rules={{ required: 'Please enter a category name.' }}
                            render={({ field, fieldState }) => (
                                <input type="text"
                                    id={field.name}
                                    value={field.value}
                                    onChange={(e) => {
                                        console.log(e.target.value)
                                        field.onChange(e.target.value)
                                    }}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                    placeholder="First Name*"
                                    required
                                />
                            )}
                        />
                    </div>
                    <div className='py-2'>
                        <Controller
                            name='lastname'
                            control={control}
                            render={({ field, fieldState }) => (
                                <input type="text"
                                    id={field.name}
                                    value={field.value}
                                    onChange={(e) => {
                                        console.log(e.target.value)
                                        field.onChange(e.target.value)
                                    }}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                    placeholder="Last Name*"
                                    required
                                />
                            )}
                        />
                    </div>
                    <div className='py-2'>
                        <Controller
                            name='email'
                            control={control}
                            rules={{ required: 'Please enter a category name.' }}
                            render={({ field, fieldState }) => (
                                <input type="text"
                                    id={field.name}
                                    value={field.value}
                                    onChange={(e) => {
                                        console.log(e.target.value)
                                        field.onChange(e.target.value)
                                    }}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                    placeholder="Email*"
                                    required
                                />

                            )}
                        />
                    </div>
                    <div className='py-2'>
                        <Controller
                            name='phoneNumber'
                            control={control}
                            render={({ field, fieldState }) => (
                                <input type="text"
                                    id={field.name}
                                    value={field.value}
                                    onChange={(e) => {
                                        console.log(e.target.value)
                                        field.onChange(e.target.value)
                                    }}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                    placeholder="Phone Number*"
                                    required
                                />
                            )}
                        />
                    </div>
                    <div className='py-2'>
                        <Controller
                            name='typeofAppointment'
                            control={control}
                            render={({ field, fieldState }) => (
                                <select
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    id={field.name}
                                    value={field.value}
                                    onChange={(e) => {
                                        console.log(e.target.value)
                                        field.onChange(e.target.value)
                                    }}
                                    required
                                >
                                    <option selected>Type of Appointment</option>
                                    <option value="1">Type 1</option>
                                    <option value="2">Type 2</option>
                                    <option value="3">Type 3</option>
                                </select>
                            )}
                        />
                    </div>
                    <div className='py-2'>
                        <button
                            type="submit"
                            class="mb-2 block w-full rounded bg-secondory px-6 pb-2 pt-2.5 text-md font-bold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                            Schedule Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ScheduleForm
