<template>
  <div :class="['layout', { collapsed: isCollapsed }]">
    <aside class="sidebar">
      <button
        class="toggle-btn"
        @click="toggleSidebar"
        aria-label="Toggle sidebar"
      >
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      <nav>
        <ul>
          <li>
            <NuxtLink to="/" class="nav-link" exact-active-class="active">
              <i class="fa-solid fa-house"></i>
              <span class="label">Dashboard</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/appointments"
              class="nav-link"
              exact-active-class="active"
            >
              <i class="fa-solid fa-calendar-check"></i>
              <span class="label">Appointments</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/medications"
              class="nav-link"
              exact-active-class="active"
            >
              <i class="fa-solid fa-pills"></i>
              <span class="label">Medications</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/lab-results"
              class="nav-link"
              exact-active-class="active"
            >
              <i class="fa-solid fa-vial"></i>
              <span class="label">Lab Results</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/patient-info"
              class="nav-link"
              exact-active-class="active"
            >
              <i class="fa-solid fa-user"></i>
              <span class="label">Patient Info</span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </aside>

    <main class="main-content">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isCollapsed = ref(false);

function toggleSidebar() {
  isCollapsed.value = !isCollapsed.value;
}
</script>

<style scoped>
/* Layout container */
.layout {
  display: flex;
  min-height: 100vh;
}

/* Sidebar */
.sidebar {
  background: #2d3748;
  color: white;
  padding: 1rem;
  width: 220px;
  transition: width 0.3s ease;
  display: flex;
  flex-direction: column;
}

/* Collapsed sidebar narrower */
.layout.collapsed .sidebar {
  width: 60px;
}

/* Remove default list styles */
.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0 0 0;
  flex-grow: 1;
}

/* Sidebar links */
.nav-link {
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  padding: 0.5rem 0;
  border-radius: 4px;
  transition: background 0.2s;
}

.nav-link:hover,
.nav-link.active {
  background: #4a5568;
}

/* Font Awesome icons */
.nav-link i {
  width: 24px;
  text-align: center;
  font-size: 18px;
  flex-shrink: 0;
}

/* Label text */
.label {
  margin-left: 5px;
  white-space: nowrap;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

/* Hide labels when collapsed */
.layout.collapsed .label {
  opacity: 0;
  visibility: hidden;
  width: 0;
  margin-left: 0;
  pointer-events: none;
}

/* Toggle button */
.toggle-btn {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0;
  margin-bottom: 1rem;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.toggle-btn svg {
  stroke: white;
}

/* Main content area */
.main-content {
  flex: 1;
  padding: 2rem;
  background: #f7fafc;
  overflow-x: auto;
}
</style>
