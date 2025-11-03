import { useState } from 'react'
import { toast } from 'react-toastify';
// import { AlertText } from './shadcn-ui/Alert';
// import { AnimateIcon } from './animate-ui/icons/icon';
// import { LoaderCircle } from 'lucide-react';
import { LoaderCircleIcon } from './animate-ui/icons/loader-circle';
import { motion } from 'motion/react';

type Props = {}

function Contact({ }: Props) {
    const [result, setResult] = useState<string>("");

    const onSubmit = async (event: any) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);

        const access_key: string = import.meta.env.VITE_WEB3FORM_ACCESS_KEY;

        // Access key here
        formData.append("access_key", access_key);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            setResult("");
            toast.success("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            toast.error(data.message);
            setResult('');
        }
    };

    // const testToast = (event: any) => {
    //     event.preventDefault();
    //     toast(AlertText)
    // }

    return (
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
                <span className='text-primary'>Contact</span>
                <span className='underline underline-offset-4 decoration-1 under font-light'>With Us</span>
            </h1>
            <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>
                Ready to Make a Move? Let's Build Your Dream Together
            </p>

            <form
                className='max-w-2xl mx-auto text-gray-600 pt-8'
                onSubmit={onSubmit}
            >
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-1/2 text-left mb-2'>
                        Your Name
                        <input
                            className='w-full border border-gray-300 rounded py-3 px-4 mt-2'
                            type="text" name='Name' placeholder='Your Name' required />
                    </div>

                    <div className='w-full md:w-1/2 text-left md:pl-4 mb-2'>
                        Your Email
                        <input
                            className='w-full border border-gray-300 rounded py-3 px-4 mt-2'
                            type="email" name='Email' placeholder='Your Email' required />
                    </div>

                    <div className='w-full my-6 text-left'>
                        Message
                        <textarea
                            className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none'
                            name="Message" placeholder='Message' required></textarea>
                    </div>

                </div>
                <button
                    className='btn-main-2 mb-10 inline-flex gap-8 justify-between'
                    disabled={result ? true : false}
                >
                    {result ? (
                        <>
                            <LoaderCircleIcon animate />
                            {result}
                        </>
                    )
                        : "Send Message"}
                </button>
            </form>

        </motion.div>
    )
}

export default Contact