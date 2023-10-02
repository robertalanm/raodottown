import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className='text-3xl pb-16'>rao.town</div>
      <div className='text-md pb-8'>
          Welcome to rao.town. We are proud to be a Bittensor validator, contributing to the decentralized machine learning ecosystem. As a validator, we play a crucial role in maintaining the integrity and security of the Bittensor network. Our commitment is to provide transparent and reliable services to our delegators and the wider Bittensor community.
      </div>
      <div>
          If you are interested in learning more or would like to delegate to us, please get in touch. We're here to help and answer any questions you might have.
      </div>


  <div class="w-full lg:max-w-2xl mx-auto bg-gray-900 px-4 py-4 rounded-md shadow-lg relative">
    <div class="flex justify-between items-center px-4 py-4 rounded-t-lg">
      <span class="text-xs font-semibold text-gray-400">html</span>
      <button
        id="copyButton"
        class="text-xs font-semibold text-gray-400 btn-copy hover:text-gray-200"
        data-clipboard-target="#codeBlock"
        onclick="copyCodeToClipboard()">📋 Copy code</button>
    </div>
    <pre class="text-sm text-white overflow-x-auto">
      <code id="codeBlock" class="block">
        btcli root delegate --delegate_ss58key 5D7thQ8XUCLMm58BxF75PTvMsyGbLC93T61RACqTmKLt49A7 --all

      </code>
    </pre>
  </div>
    </main>
  )
}
