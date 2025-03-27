import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

function FavouritesPage() {
    const schema = z.object({
        number: z.number().min(1).max(100),
        q: z.enum(['love', 'like']),
        size: z.enum(['small', 'medium', 'large']),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            number: 1,
            q: 'love',
            size: 'medium',
        },
    });

    const nav = useNavigate();

    const onSubmit = (data) => {
        nav(`/fav/${data.number}?q=${data.q}&size=${data.size}`);
    };

    return (
        <div className="">
            <form onSubmit={handleSubmit(onSubmit)} className="f">
                <div>
                    <input
                        type="number"
                        {...register('number', { valueAsNumber: true })}
                        className=""
                    />
                    {errors.number && <p className="text-lg text-[#FF6161]">{"!!! "+errors.number.message+" !!!"}</p>}
                </div>
                <div>
                    <select {...register('q')} className="">
                        <option value="love">Love</option>
                        <option value="like">Like</option>
                    </select>
                    {errors.q && <p className="text-lg text-[#FF6161]">{errors.q.message}</p>}
                </div>
                <div>
                    <select {...register('size')} className="">
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                    {errors.size && <p className="text-lg text-[#FF6161]">{errors.size.message}</p>}
                </div>
                <button type="submit" className="">
                    Go
                </button>
            </form>
        </div>
    );
}

export default FavouritesPage;