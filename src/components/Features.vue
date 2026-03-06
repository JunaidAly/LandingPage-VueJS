<script setup>
const features = [
  {
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />`,
    title: 'Blazing Fast',
    description: 'Optimized from the ground up. Your app loads in milliseconds, keeping users engaged and conversion rates high.',
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
  },
  {
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />`,
    title: 'Secure by Default',
    description: 'Enterprise-grade security baked in. End-to-end encryption, SSO support, and automated vulnerability scanning.',
    color: 'text-green-500',
    bg: 'bg-green-50',
  },
  {
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />`,
    title: 'Powerful Analytics',
    description: 'Deep insights into how your product is used. Real-time dashboards, funnel analysis, and retention metrics.',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50',
  },
  {
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />`,
    title: 'Auto Scaling',
    description: 'Handles traffic spikes automatically. Scale from zero to millions of users without changing a single line of code.',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
  {
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />`,
    title: 'Team Collaboration',
    description: 'Work together seamlessly. Role-based access, live commenting, and real-time sync keep your team in flow.',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
  },
  {
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />`,
    title: 'Easy Integration',
    description: 'Plug into your existing stack. 200+ native integrations with the tools your team already loves.',
    color: 'text-rose-500',
    bg: 'bg-rose-50',
  },
]
</script>

<template>
  <section id="features" class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
    <div class="max-w-7xl mx-auto">
      <!-- Section header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          Everything you need to launch
        </h2>
        <p class="text-lg text-gray-500 max-w-2xl mx-auto">
          Stop stitching together dozens of tools. LaunchPad gives you a complete, integrated platform.
        </p>
      </div>

      <!-- Feature grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="group p-6 rounded-2xl border border-gray-100 hover:border-indigo-200 hover:shadow-lg transition-all duration-200"
        >
          <div :class="[feature.bg, 'w-12 h-12 rounded-xl flex items-center justify-center mb-4']">
            <svg :class="[feature.color, 'w-6 h-6']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <g v-html="feature.icon"></g>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ feature.title }}</h3>
          <p class="text-gray-500 text-sm leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
