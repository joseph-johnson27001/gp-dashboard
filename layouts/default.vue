<template>
  <div class="layout collapsed">
    <aside class="sidebar">
      <img src="/dashboard-logo.png" alt="Dashboard Logo" class="logo" />

      <nav>
        <ul>
          <li class="nav-item">
            <NuxtLink to="/" class="nav-link" exact-active-class="active">
              <i class="fa-solid fa-house"></i>
              <span class="tooltip">Dashboard</span>
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink
              to="/appointments"
              class="nav-link"
              exact-active-class="active"
            >
              <i class="fa-solid fa-calendar-check"></i>
              <span class="tooltip">Appointments</span>
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink
              to="/medications"
              class="nav-link"
              exact-active-class="active"
            >
              <i class="fa-solid fa-pills"></i>
              <span class="tooltip">Medications</span>
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink
              to="/lab-results"
              class="nav-link"
              exact-active-class="active"
            >
              <i class="fa-solid fa-vial"></i>
              <span class="tooltip">Lab Results</span>
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink
              to="/patient-info"
              class="nav-link"
              exact-active-class="active"
            >
              <i class="fa-solid fa-user"></i>
              <span class="tooltip">Patient Info</span>
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

<style scoped>
.layout {
  display: flex;
  min-height: 100vh;
  min-width: 100vw;
  position: relative;
  z-index: 0;
}

.sidebar {
  background: #2d3748;
  color: white;
  padding: 1rem 0;
  width: 60px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: visible;
  z-index: 10;
}

/* Logo */
.logo {
  width: 36px;
  height: 36px;
  margin-bottom: 1rem;
  object-fit: contain;
}

/* Sidebar navigation */
.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
}

/* Nav item for tooltip container */
.nav-item {
  position: relative;
}

/* Nav links */
.nav-link {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  padding: 1rem 0;
  border-radius: 4px;
  transition: background 0.2s;
  width: 48px;
  margin-bottom: 5px;
  position: relative;
  z-index: 1; /* above nav-item but below tooltip */
}

.nav-link:hover,
.nav-link.active {
  background: #4a5568;
}

/* Icon style */
.nav-link i {
  font-size: 18px;
}

/* Tooltip */
.tooltip {
  position: absolute;
  left: 60px;
  top: 50%;
  transform: translateY(-50%);
  background: #4a5568;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  white-space: nowrap;
  font-size: 0.75rem;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.15s ease-in-out;
  z-index: 20;
}

.nav-link:hover .tooltip {
  opacity: 1;
}

/* Main content */
.main-content {
  margin-left: 60px;
  padding: 1.5rem 2rem;
  background: #f7fafc;
  height: 100vh;
  overflow-y: auto;
  flex-grow: 1;
  position: relative;
  z-index: 0;
}
</style>
