<template>
  <div class="layout">
    <aside class="sidebar">
      <nav>
        <ul>
          <li><a href="/">Dashboard</a></li>
          <li><a href="#">Appointments</a></li>
          <li><a href="#">Medications</a></li>
          <li><a href="#">Lab Results</a></li>
          <li><a href="#">Patient Info</a></li>
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
}

.sidebar {
  width: 200px;
  background: #2d3748;
  color: white;
  padding: 1rem;
}

.sidebar a {
  color: white;
  text-decoration: none;
  display: block;
  margin: 0.5rem 0;
}

.main-content {
  flex: 1;
  padding: 2rem;
  background: #f7fafc;
}
</style>
