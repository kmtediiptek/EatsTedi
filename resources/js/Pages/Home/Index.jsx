import React from 'react'
import { Head, Link } from '@inertiajs/react'
import Container from '@/Components/Container'
import Header from '@/Components/Header'
import Pagination from '@/Components/Pagination'
import { IconCategory } from '@tabler/icons-react'
import Guest from '@/Layouts/Guest'
import ProductItemUser from '@/Components/ProductItemUser'
import Footer from '@/Components/Footer'

export default function Index({ categories, ...props }) {
    const { data: products, meta, links } = props.products


    return (
        <>
            <Head title="Our Products" />
            <Header>
                <Header.Title>
                    Our Menus
                </Header.Title>
                <Header.Subtitle>
                    Here are some of the products we present to you
                </Header.Subtitle>
                <Header.Content>
                    In our diverse menu, there are various choices of mouth-watering food and drinks. Starting from fresh and aromatic specialty coffee, delicious light dishes, to indulgent main dishes, we offer a variety of choices that can satisfy every customer's desires and tastes.
                </Header.Content>
            </Header>

            <Container>
                <h3 className='text-2xl mb-4 font-semibold text-slate-700'>Categories</h3>
                <div className="flex w-full scrolling-wrapper overflow-x-scroll pb-1 flex-nowrap gap-x-4">
                    <Link href={route('admin.transaction')} className="flex text-white">
                        <div className="w-32 h-32 bg-purple-500 rounded p-2 shadow">
                            <IconCategory className='my-2' />
                            <p className='block'>All Menu</p>
                            <h6 className='text-lg font-semibold'>10 items</h6>
                        </div>
                    </Link>
                    {categories.map((category, index) => (
                        <Link href={`/?category=${category.slug}`} className="flex rounded text-white" key={index}>
                            <div className="w-32 h-32  rounded border border-gray-300 text-slate-600 p-2" >
                                <div className='w-8 h-8 mb-2' dangerouslySetInnerHTML={{ __html: category.icon }} />
                                <p className='text-slate-500'>{category.name}</p>
                                <h6 className='text-lg font-semibold'>10 items</h6>
                            </div>
                        </Link>
                    ))}

                </div>
            </Container>


            <Container>
            <h3 className='text-2xl mt-10 mb-4 font-semibold text-slate-700'>Special menu for you</h3>
                {products.length ?
                    <div className='grid grid-cols-2 w-full md:grid-cols-3 lg:grid-cols-4 sm:gap-10 gap-4'>
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
