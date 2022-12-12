import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "How many languages do you speak?",
    answer:
      "Three! I natively speak English, fluently speak Portuguese, and I am creating my own language for fun called Balek!",
  },
  {
    question: "What is your favorite TV show, and why?",
    answer:
      "I would have to say Avatar: The Last Airbender. The character arcs, storytelling, and world-building are all masterclasses in how to craft a compelling tale! It is a story that captures your heart and imagination.",
  },
  {
    question: "What is your favorite movie, and why?",
    answer:
      "I have to say The Lord of the Rings trilogy (extended editions of course). I know that is cheating by picking three movies, but these movies are perfect. They are epic, tender, exciting, endearing, and everything else you can think of! I love those characters.",
  },
  {
    question: "What food would you sell your soul for?",
    answer:
      "Sushi. I love pretty much all food, but any time of the day or night, I am ready to devour sushi!",
  },
  {
    question: "Other than coding, what could you spend hours doing?",
    answer:
      "Playing Dungeons & Dragons! I am a forever DM, and I love building stories and worlds for my friends and family to explore. I highly recommend you try playing if you have not done so yet.",
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const FAQ = () => {
  return (
    <section className="bg-white mb-40">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Q&A with Matt
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
};

export default FAQ;
