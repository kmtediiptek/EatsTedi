import React, { useState } from 'react'
import { Head, Link, usePage, router } from '@inertiajs/react'
import Container from '@/Components/Container'
import Pagination from '@/Components/Pagination'
import { IconCategory } from '@tabler/icons-react'
import Guest from '@/Layouts/Guest'
import ProductItemUser from '@/Components/ProductItemUser'
import Footer from '@/Components/Footer'
import TextInput from '@/Components/TextInput'

export default function Index({ categories, total_categories, payments, ...props }) {
    const { url } = usePage()

    const { data: products, meta, links } = props.products

    const [searchQuery, setSearchQuery] = useState('')

    const handleSearch = (e) => {
        e.preventDefault()
        setSearchQuery(e.target.value)
        router.get(url, {
            search: searchQuery
        }, {
            preserveState: true
        })
    }

    return (
        <>
            <Head title="Our Products" />
            <Container className="w-full text-center py-12">
                <div className='w-full mt-4'>
                    <div>
                        <h3 className='text-slate-700 text-3xl font-semibold'>Our Menus</h3>
                    </div>
                    <div className='w-full mt-4'>
                        <h5 className='text-slate-600 text-xl'> Here are some of the products we present to you</h5>
                    </div>
                </div>
                <div className='w-full mt-4'>
                    <p className='text-slate-500'>
                        In our diverse menu, there are various choices of mouth-watering food and drinks.

                    </p>
                    <p className='text-slate-500'>
                        Starting from fresh and aromatic specialty coffee, delicious light dishes, to indulgent main dishes, we offer a variety of choices that can satisfy every customer's desires and tastes.
                    </p>
                </div>
            </Container>

            <Container>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                    <div className="w-full">
                        <TextInput
                            type="search"
                            className="w-full border-r border-b-none border-r "
                            placeholder="Search menu.."
                            defaultValue={searchQuery}
                            onChange={handleSearch}
                        />
                    </div>
                    <div className="w-full flex relative rounded scrolling-wrapper border border-gray-300 relative gap-x-4 overflow-x-scroll flex-nowrap">
                        <Link href={route('home.index')} className="px-2 gap-x-2 flex text-white text-slate-600 border-gray-300 border-r">
                            <IconCategory className='my-2 text-gray-600' size={20} />
                            <div className='flex h-10 items-center justify-center'>
                                <p className='text-slate-500'>All</p>
                            </div>
                        </Link>
                        {categories.map((category, index) => (
                            <Link href={`/?category=${category.slug}`} className="px-2 justify-between gap-x-2 flex items-center text-white border-gray-300 text-slate-600 border-r" key={index}>
                                <div className='my-2 text-gray-600' dangerouslySetInnerHTML={{ __html: category.icon }} />
                                <div className='flex h-10 items-center justify-center'>
                                    <p className='text-slate-500'>{category.name}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </Container>


            <Container>
                <h3 className='text-2xl mb-4 font-semibold text-slate-700'>Special menu for you</h3>
                {products.length ?
                    <div className='grid grid-cols-2 sm:grid-cols-3 w-full md:grid-cols-4 lg:grid-cols-5 sm:gap-10 gap-4'>
                        {
                            products.map(product => (
                                <ProductItemUser product={product} key={product.slug} />
                            ))
                        }
                    </div>
                    : null}
            </Container>

            <Container className="flex justify-center">
                <Pagination meta={meta} links={links} />
            </Container>

            <Footer />
        </>
    )
}

Index.layout = page => <Guest children={page} />
